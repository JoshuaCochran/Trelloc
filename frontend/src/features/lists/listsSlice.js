import { createSlice } from "redux-starter-kit";
import axios from "axios";

const listsSlice = createSlice({
  name: "lists",
  initialState: {},
  reducers: {
    addList: {
      reducer(state, action) {
        const { id, boardId, title, position } = action.payload;

        state[id] = { id, boardId, title, position };
      },
      prepare(id, boardId, title, position) {
        return { payload: { id, boardId, title, position } };
      }
    },
    deleteList: {
      reducer(state, action) {
        delete state[action.payload.id];
      }
    },
    moveList: {
      reducer(state, action) {
        const { listId, newPosition, newBoardId } = action.payload;
        console.log(newPosition);

        let orderedLists = [];
        Object.keys(state).map(key =>
          state[key].boardId === newBoardId
            ? orderedLists.push([state[key], key])
            : null
        );
        orderedLists.sort((a, b) => a[0].position - b[0].position);

        if (state[listId].boardId !== newBoardId) {
          state[listId].position = orderedLists.length;
          state[listId].boardId = newBoardId;
          orderedLists.push([state[listId], listId]);
        }

        if (state[listId].position < orderedLists.length - 1)
          for (let i = state[listId].position + 1; i <= newPosition; i++)
            orderedLists[i][0].position -= 1;
        else
          for (let i = newPosition; i < state[listId].position; i++)
            orderedLists[i][0].position += 1;
        state[listId].position = newPosition;

        orderedLists.forEach(
          listArray => (state[listArray[1]].position = listArray[0].position)
        );

        Object.keys(state).map(key => {
          const data = {
            boardId: state[key].boardId,
            title: state[key].title,
            position: state[key].position
          };
          axios
            .put("http://localhost:8082/api/lists/" + state[key].id, data)
            .catch(err => {
              console.log("Error in CreateBoard!");
            });
        });
      },
      prepare(listId, newPosition, newBoardId) {
        return { payload: { listId, newPosition, newBoardId } };
      }
    }
  }
});

export const { addList, deleteList, moveList } = listsSlice.actions;

export default listsSlice.reducer;

export const fetchLists = () => dispatch => {
  axios.get("lists").then(res => {
    res.data.map(list => {
      dispatch(addList(list._id, list.boardId, list.title, list.position));
    });
  });
};

export const postList = (boardId, title, position) => dispatch => {
  const data = {
    boardId: boardId,
    title: title,
    position: position
  };
  axios
    .post("lists", data)
    .then(res => {
      dispatch(addList(res.data.list._id, boardId, title, position));
    })
    .catch(err => {
      console.log("Error in CreateBoard!");
    });
};
