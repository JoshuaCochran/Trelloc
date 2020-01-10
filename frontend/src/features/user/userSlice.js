import { createSlice } from "redux-starter-kit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: {
      reducer(state, action) {
        const { username, email, token } = action.payload;
        state[0] = { username, email, token };
      },
      prepare(username, email, token) {
        return { payload: { username, email, token } };
      }
    },
    deleteUser: {
      reducer(state, action) {
        delete state[0];
      }
    }
  }
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
