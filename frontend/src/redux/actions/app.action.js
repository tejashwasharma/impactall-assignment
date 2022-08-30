import useAxios from '../../api';
import { TOGGLE_LOADING, STORE_USER } from '../constants';

export const login = (credentials) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_LOADING, data: true });
        useAxios({
            method: 'post',
            url: '/auth/login',
            data: credentials
        })
            .then(res => {
                const data = res.data;
                localStorage.setItem("Auth_token", data.token);
                dispatch({ type: STORE_USER, data: data.user });
                dispatch({ type: TOGGLE_LOADING, data: false });
            })
            .catch(error => {
                dispatch({ type: TOGGLE_LOADING, data: false });
            })
    }
}

export const signup = (user, callback) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_LOADING, data: true });
        useAxios({
            method: 'post',
            url: '/auth/signup',
            data: user
        })
            .then(res => {
                dispatch({ type: TOGGLE_LOADING, data: false });
                if (callback) callback();
            })
            .catch(error => {
                dispatch({ type: TOGGLE_LOADING, data: false });
            })
    }
}