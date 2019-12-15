export const getActiveBoard = (state) => { 
return Object.keys(state).find(key => object[key].isActive === true);
}

export const getObjectById = (state, id) => { 
  return Object.keys(state).find(key => object[key].id === id);
}

export const getObjectIds = (state) => {
  return state.map(item => item.id);
}


export const getTitle = (state) => { 
  return state.title;
}

