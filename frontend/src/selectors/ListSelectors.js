export const getNumLists = (state, boardId) => {
  return Object.values(state).filter(list => list.boardId === boardId).length;
};

export const getPosition = (state, listId) => {
  return state[listId].position;
}