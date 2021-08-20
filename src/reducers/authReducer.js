const initialState = {
    name: 'Name of user',
    loggedIn: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Login':
            return { ...state, ...action.payload }
        default:
            return state;
    }
}