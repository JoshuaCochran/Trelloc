import { createSlice } from "redux-starter-kit";

let nextCardId = 0;

const cardsSlice = createSlice({
  name: "cards",
  initialState: {},
  reducers: {
    addCard: {
      reducer(state, action) {
        const { id, boardId, title, description } = action.payload;
        state[id] = { id, boardId, title, description };
      },
      prepare(boardId, title, description) {
        return { payload: { boardId, title, description, id: nextCardId++ } };
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
