const actions = {
    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILED: 'GET_USER_FAILED',

    getUser: () => ({
        type: actions.GET_USER,
    }),
    getUserSuccess: (userResult) => ({
        type: actions.GET_USER_SUCCESS,
        userResult
    }),
    getUserFailed: (userError) => ({
        type: actions.GET_USER_FAILED,
        userError
    }),

};
export default actions;
