import { createSlice } from "redux-starter-kit";
import axios from "axios";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    addCard: {
      reducer(state, action) {
        const { id, listId, title, description, position } = action.payload;

        state[id] = { id, listId, title, description, position };
      },
      prepare(id, listId, title, description, position) {
        return {
          payload: { id, listId, title, description, position }
        };
      }
    },
    deleteCard: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    },
    moveCard: {
      reducer(state, action) {
        state[action.payload.id].listId = action.payload.listId;
      }
    },
    moveCards: {
      reducer(state, action) {
        Object.keys(state).forEach(key => {
          if (state[key].listId === action.payload.listId)
            state[key].listId = action.payload.swapListId;
        });
      }
    },
    reorderCards: {
      reducer(state, action) {
        const { id, listId, position } = action.payload;

        let orderedCards = [];
        Object.keys(state).map(key =>
          state[key].listId === listId
            ? orderedCards.push([state[key], key])
            : null
        );
        orderedCards.sort((a, b) => a[0].position - b[0].position);

        if (state[id].listId !== listId) {
          state[id].position = orderedCards.length;
          state[id].listId = listId;
          orderedCards.push([state[id], id]);
        }

        if (state[id].position < orderedCards.length - 1)
          for (let i = state[id].position + 1; i <= position; i++)
            orderedCards[i][0].position -= 1;
        else
          for (let i = position; i < state[id].position; i++)
            orderedCards[i][0].position += 1;
        state[id].position = position;

        orderedCards.forEach(
          cardArray => (state[cardArray[1]].position = cardArray[0].position)
        );

        Object.keys(state).map(key => {
          const data = {
            listId: state[key].listId,
            title: state[key].title,
            position: state[key].position
          };
          axios
            .put("cards/" + state[key].id, data)
            .catch(err => {
              console.log("Error in reorderCards!");
            });
        });
      },
      prepare(id, listId, position) {
        return {
          payload: { id, listId, position }
        };
      }
    }
  }
});

export const { addCard, deleteCard, moveCard, moveCards, reorderCards } = cardsSlice.actions;

export default cardsSlice.reducer;

export const postCard = (listId, title, description, position) => dispatch => {
  const data = {
    listId: listId,
    title: title,
    description: "",
    position: position
  };
  axios
    .post("cards", data)
    .then(res => {
      dispatch(addCard(res.data.card._id, listId, title, description, position));
    })
    .catch(err => {
      console.log("Error in CreateCard!");
    });
};

export const fetchCards = () => dispatch => {
  axios.get("cards").then(res => {
    res.data.map(card => {
      dispatch(
        addCard(
          card._id,
          card.listId,
          card.title,
          card.description,
          card.position
        )
      );
    });
  });
};
