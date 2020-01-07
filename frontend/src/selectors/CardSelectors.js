export const getNumCards = (state, listId) => {
    return Object.values(state).filter(card => card.listId === listId).length;
  };
  