import { createSlice } from "redux-starter-kit";

const boardsSlice = createSlice({
  name: "boards",
  initialState: {},
  reducers: {
    addBoard: {
      reducer(state, action) {
        const { id, owner, title, isPrivate, isActive } = action.payload;
        state[id] = { id, owner, title, isPrivate, isActive };
      },
      prepare(id, owner, title, isPrivate, isActive) {
        return { payload: { id, owner, title, isPrivate, isActive } };
      }
    },
    deleteBoard: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    },
    setActive: {
      reducer(state, action) {
        Object.keys(state).forEach(key => {
          if (state[key].isActive === true) state[key].isActive = false;
        });
        state[action.payload.id].isActive = action.payload.isActive;
      },
      prepare(id, isActive) {
        return { payload: { id, isActive } };
      }
    },
  }
});

export const {
  addBoard,
  deleteBoard,
  setActive
} = boardsSlice.actions;

export default boardsSlice.reducer;
