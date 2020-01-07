import { createSlice } from "redux-starter-kit";

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
