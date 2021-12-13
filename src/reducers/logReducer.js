import { ADD_LOG, DELETE_LOG, GET_LOGS, LOGS_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            };
        case ADD_LOG:
            return {
                ...state,
                logs: [action.payload, ...state.logs],
                loading: false
            };
        case DELETE_LOG:
            return {
                ...state,
                logs: state.logs.filter(
                    (log) => log.id !== action.payload,
                ),
                loading: false
            };
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: null
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}