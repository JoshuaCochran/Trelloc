export const selectActiveBoard = (state) => { 
return Object.keys(state).find(key => object[key].isActive === true);
}
