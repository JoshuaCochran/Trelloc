export const getActiveBoard = (state) => { 
return Object.keys(state).find(key => object[key].isActive === true);
}

export const getObjectById = (state, id) => { 
  return Object.keys(state).find(key => object[key].id === id);
}
