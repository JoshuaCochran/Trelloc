import { createSlice } from "redux-starter-kit";

let nextCardId = 0;

const listsSlice = createSlice({
  name: "lists",
  initialState: {},
  reducers: {
    addList: {
      reducer(state, action) {
        const { id, boardId, title } = action.payload;
        state[id] = { id, boardId, title };
      },
      prepare(boardId, title) {
        return { payload: { boardId, title, id: nextCardId++ } };
      }
    },
    deleteList: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    }
  }
});

export const { addList, deleteList } = listsSlice.actions;

export default listsSlice.reducer;
