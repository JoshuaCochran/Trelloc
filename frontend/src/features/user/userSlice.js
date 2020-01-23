import { createSlice } from "redux-starter-kit";
import axios from "axios";
import Cookies from "universal-cookie";

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

export const fetchUserDetails = token => dispatch => {
  if (token)
    axios.get("users/me").then(res => {
      dispatch(addUser(res.data.username, res.data.email, token));
    });
};

export const login = (email, password) => dispatch => {
  const data = {
    email: email,
    password: password
  };

  axios
    .post("users/login", data)
    .then(res => {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + res.data.token;
      dispatch(
        addUser(res.data.user.username, res.data.user.email, res.data.token)
      );
      const cookies = new Cookies();
      cookies.set("trelloc token", res.data.token, { path: "/" });
    })
    .catch(err => {
      console.log("Login error!");
    });
};

export const logout = () => dispatch => {
  axios
    .get("users/me/logout")
    .then(res => {
      const cookies = new Cookies();
      cookies.remove("trelloc token", { path: "/" });
      dispatch(deleteUser());
    })
    .catch(err => {
      console.log("Logout error!");
    });
};
