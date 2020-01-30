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
        const {
          id,
          oldListId,
          newListId,
          oldPosition,
          newPosition
        } = action.payload;
        console.log(action.payload);

        // First we make two arrays. 
        let orderedOldCards = [];
        let orderedNewCards = [];
        Object.keys(state).map(key => {
          // In the first array we put all the cards from the source list
          if (state[key].listId === oldListId)
            orderedOldCards.push([state[key], key]);
          // In the second we put all the cards from the destination list
          else if (state[key].listId === newListId)
            orderedNewCards.push([state[key], key]);
        });
        // Then we sort both by the position of their elements
        orderedOldCards.sort((a, b) => a[0].position - b[0].position);
        orderedNewCards.sort((a, b) => a[0].position - b[0].position);

        // If the card is moving within its original list
        if (state[id].listId === newListId) {
          // First we remove the card from the list
          const [removed] = orderedOldCards.splice(oldPosition, 1);
          // Then we splice it back in at its new position
          orderedOldCards.splice(newPosition, 0, removed);
          // Now, we update the state with the new card positions 
          // We didn't actually change any .position elements, but they are sorted by index
          // So we simply update the position of the cards in state to match their index in orderedOldCards
          orderedOldCards.forEach((cardArray, i) => {
            state[cardArray[1]].position = i;
          });
        } else {
          // If the card is moving between lists we do pretty much the same thing
          const result = orderedOldCards;
          const [removed] = result.splice(oldPosition, 1);
          // We just skip the step where we put the card back in a new position in the source list
          result.forEach((cardArray, i) => {
            state[cardArray[1]].position = i;
          });
          // and instead update its listId element in state to the id of the destination list
          state[id].listId = newListId;

          // Then splice the card into the orderedNewCards array we made earlier
          orderedNewCards.splice(newPosition, 0, removed);
          // and update the state 
          orderedNewCards.forEach((cardArray, i) => {
            state[cardArray[1]].position = i;
          });
        }

        /*Object.keys(state).map(key => {
          const data = {
            listId: state[key].listId,
            title: state[key].title,
            position: state[key].position
          };
          axios.put("cards/" + state[key].id, data).catch(err => {
            console.log("Error in reorderCards!");
          });
        });*/
      },
      prepare(id, oldListId, newListId, oldPosition, newPosition) {
        return {
          payload: { id, oldListId, newListId, oldPosition, newPosition }
        };
      }
    }
  }
});

export const {
  addCard,
  deleteCard,
  moveCard,
  moveCards,
  reorderCards
} = cardsSlice.actions;

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
      dispatch(
        addCard(res.data.card._id, listId, title, description, position)
      );
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
