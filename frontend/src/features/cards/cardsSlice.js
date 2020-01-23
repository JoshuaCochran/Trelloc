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
    }
  }
});

export const { addCard, deleteCard, moveCard, moveCards } = cardsSlice.actions;

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
      dispatch(addCard(res.data.card._id, listId, title, position));
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
