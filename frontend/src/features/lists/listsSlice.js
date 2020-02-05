import { createSlice } from "redux-starter-kit";
import axios from "axios";

const listsSlice = createSlice({
  name: "lists",
  initialState: {},
  reducers: {
    addList: {
      reducer(state, action) {
        const { owner, id, boardId, title, position } = action.payload;

        state[id] = { owner, id, boardId, title, position };
      },
      prepare(owner, id, boardId, title, position) {
        return { payload: { owner, id, boardId, title, position } };
      }
    },
    deleteList: {
      reducer(state, action) {
        const id = action.payload;
        const boardId = state[id].boardId;

        let orderedLists = [];
        Object.keys(state).map(key => {
          if (state[key].boardId === boardId)
            orderedLists.push([state[key], key]);
        });
        orderedLists.sort((a, b) => a[0].position - b[0].position);

        orderedLists.splice(state[id].position, 1);
        delete state[id];

        orderedLists.forEach((listArray, i) => {
          state[listArray[1]].position = i;
        });

        Object.keys(state).map(key => {
          if (state[key].boardId === boardId) {
            const data = {
              boardId: state[key].boardId,
              title: state[key].title,
              position: state[key].position
            };
            axios.put("lists/" + state[key].id, data).catch(err => {
              console.log("Error in deleteLists!");
            });
          }
        });

        axios.delete("lists/" + id).catch(err => {
          console.log("Error in deleteList!");
        });
      }
    },
    renameList: {
      reducer(state, action) {
        const { id, title } = action.payload;

        state[id].title = title;

        const data = {
          title: title
        };
        axios.put("lists/" + id, data).catch(err => {
          console.log("Error in renameList!");
        });
      },
      prepare(id, title) {
        return {
          payload: { id: id, title: title }
        };
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
          axios.put("lists/" + state[key].id, data).catch(err => {
            console.log("Error in CreateBoard!");
          });
        });
      },
      prepare(listId, newPosition, newBoardId) {
        return { payload: { listId, newPosition, newBoardId } };
      }
    },
    reorderLists: {
      reducer(state, action) {
        const { id, boardId, oldPosition, newPosition } = action.payload;

        let orderedLists = [];
        Object.keys(state).map(key => {
          if (state[key].boardId === boardId)
            orderedLists.push([state[key], key]);
        });
        orderedLists.sort((a, b) => a[0].position - b[0].position);

        const [removed] = orderedLists.splice(oldPosition, 1);
        orderedLists.splice(newPosition, 0, removed);
        orderedLists.forEach((listArray, i) => {
          state[listArray[1]].position = i;
        });

        Object.keys(state).map(key => {
          if (state[key].boardId === boardId) {
            const data = {
              boardId: state[key].boardId,
              title: state[key].title,
              position: state[key].position
            };
            axios.put("lists/" + state[key].id, data).catch(err => {
              console.log("Error in reorderLists!");
            });
          }
        });
      },
      prepare(id, boardId, oldPosition, newPosition) {
        return { payload: { id, boardId, oldPosition, newPosition } };
      }
    }
  }
});

export const {
  addList,
  deleteList,
  renameList,
  moveList,
  reorderLists
} = listsSlice.actions;

export default listsSlice.reducer;

export const fetchLists = () => dispatch => {
  axios.get("lists").then(res => {
    res.data.map(list => {
      dispatch(
        addList(list.owner, list._id, list.boardId, list.title, list.position)
      );
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
      dispatch(
        addList(res.data.owner, res.data.list._id, boardId, title, position)
      );
    })
    .catch(err => {
      console.log("Error in CreateBoard!");
    });
};
