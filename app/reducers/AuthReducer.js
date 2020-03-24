import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../config/constants';

const INITIAL_STATE = { sEmail: '', sPassword: '', user: null, sError: '', bLoading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, sEmail: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, sPassword: action.payload };

        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_USER_FAIL:
            return { ...state, sError: 'Authentication Failed', bLoading: false };

        case LOGIN_USER:
            return { ...state, bLoading: true, sError: '' };

        default:
            return state;
    }
};
