import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    TECHS_ERROR, 
    SET_LOADING
} from './types';

// Get Techs
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.message
        });
    }
};

// Add Tech
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/techs', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(tech)
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.message
        });
    }
};

// Delete Tech
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

       await fetch(`/techs/${id}`, {
            method: 'DELETE'
       });
       
        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.message
        });
    }
};

// Set Loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}