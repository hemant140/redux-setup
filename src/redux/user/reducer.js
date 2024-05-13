import actions from "./actions";

const initState = {
    userResult: [],
    loading: false,
    error: null,
    message: null
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case actions.GET_USER:
            return {
                ...state,
                loading: true

            };
        case actions.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userResult: action.userResult,

            };
        case actions.GET_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.userError,

            };

        default:
            return state;
    }
}
