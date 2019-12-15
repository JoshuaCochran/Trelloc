export const getActiveBoard = (state) => { 
   return Object.keys(state).find(key => state[key].isActive === true);
}

export const getObjectById = (state, id) => { 
  return Object.keys(state).find(key => state[key].id === id);
}

export const getObjectIds = (state) => {
  return state.map(item => item.id);
}

export const getTitle = (state, key) => { 
  return state[key].title;
}

export const getId = (state, key) => {
  return state[key].id;
}
