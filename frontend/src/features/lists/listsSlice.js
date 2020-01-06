import { createSlice } from "redux-starter-kit";

let nextCardId = 0;

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

        if (state[listId].boardId != newBoardId) {
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
      },
      prepare(listId, newPosition, newBoardId) {
        return { payload: { listId, newPosition, newBoardId } };
      }
    }
  }
});

export const { addList, deleteList, moveList } = listsSlice.actions;

export default listsSlice.reducer;
