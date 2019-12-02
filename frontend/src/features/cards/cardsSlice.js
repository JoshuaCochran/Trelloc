import { createSlice } from "redux-starter-kit";

let nextCardId = 0;

const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    addCard: {
      reducer(state, action) {
        const { id, listId, title, description } = action.payload;
        state[id] = { id, listId, title, description };
      },
      prepare(listId, title, description) {
        return { payload: { listId, title, description, id: nextCardId++ } };
      }
    },
    deleteCard: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    },
  }
});

export const { addCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;
