export const doLogin = (payload) => {
    return dispatch => {
        dispatch({
            type: 'Login',
            payload: payload
        })
    }
}