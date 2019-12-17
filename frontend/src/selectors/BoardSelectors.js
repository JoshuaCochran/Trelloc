export const getActiveBoard = (state) => { 
   return state[Object.keys(state).find(key => state[key].isActive === true)];
}

export const getObjectById = (state, id) => { 
  return Object.keys(state).find(key => state[key].id === id);
}

export const getObjectIds = (state) => {
  return state.map(item => item.id);
}

export const getTitle = (state) => { 
  return state.title;
}

export const getId = (state) => {
  return state.id;
}
