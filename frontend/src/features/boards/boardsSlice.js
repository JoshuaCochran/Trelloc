import { createSlice } from "redux-starter-kit";
import axios from "axios";

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
        const id = action.payload;
        delete state[id];

        axios.delete("boards/" + id).catch(err => {
          console.log("Error in deleteBoard!");
        });
      }
    },
    renameBoard: {
      reducer(state, action) {
        const { id, title } = action.payload;

        state[id].title = title;

        const data = {
          title: state[id].title
        };
        axios.put("boards/" + id, data).catch(err => {
          console.log("Error in renameBoard!");
        });
      },
      prepare(id, title) {
        return {
          payload: { id: id, title: title }
        };
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
    }
  }
});

export const {
  addBoard,
  deleteBoard,
  renameBoard,
  setActive
} = boardsSlice.actions;

export default boardsSlice.reducer;

export const postBoard = (title, isPrivate, isActive) => dispatch => {
  const data = {
    title: title,
    isPrivate: isPrivate,
    isActive: isActive
  };

  axios
    .post("boards", data)
    .then(res => {
      dispatch(
        addBoard(res.data.board._id, res.data.board.owner, title, true, false)
      );
    })
    .catch(err => {
      console.log("Error in CreateBoard!");
    });
};

export const fetchBoards = () => dispatch => {
  axios.get("boards").then(res => {
    res.data.map(board => {
      dispatch(
        addBoard(
          board._id,
          board.owner,
          board.title,
          board.isPrivate,
          board.isActive
        )
      );
    });
  });
};
