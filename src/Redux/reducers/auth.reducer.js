import { SET_LOADING, LOGIN_SUCCESS } from './../types';

// state
const initialState = {
    login_params: [],
    loading: false,
    user_data: []
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }    
        default:
            return state;
            break;
    }
}

export default authReducer;