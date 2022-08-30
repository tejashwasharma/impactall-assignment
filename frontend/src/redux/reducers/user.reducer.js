import {
    STORE_USER,
    LOGOUT
} from '../constants';

const initialState = {
    profile: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER:
            return { ...state, profile: action.data };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;