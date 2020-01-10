export const isLoggedIn = (state) => {
    return state[0] && state[0].token ? true : false;
}

export const getAuthToken = (state) => {
    return state[0] ? state[0].token : null;
}