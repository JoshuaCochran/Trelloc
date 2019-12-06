import { createSlice } from "redux-starter-kit";

let nextBoardId = 0;

const boardsSlice = createSlice({
  name: "boards",
  initialState: {},
  reducers: {
    addBoard: {
      reducer(state, action) {
        const { id, title, isPrivate } = action.payload;
        state[id] = { id, title, isPrivate };
      },
      prepare(title, isPrivate) {
        return { payload: { title, isPrivate, id: nextBoardId++ } };
      }
    },
    deleteBoard: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    }
  }
});

export const { addBoard, deleteBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
