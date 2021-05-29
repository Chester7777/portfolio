import {API} from "../DAL/API";


const initialState = {
    name: "",
    email: "",
    message: "",
    errorText: "the form is filled out incorrectly",
}

export const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case "form/SET-MESSAGE":
            return {
                ...state,
                name: action.name,
                email: action.email,
                message: action.message
            }
        case "form/SET-ERROR-TEXT":
            return {
                ...state,
                errorText: state.errorText
            }
        default:
            return state
    }
}

// actions
export const setMessage = (name, email, message) =>
    ({type: "form/SET-MESSAGE", name, email, message});
export const setErrorText = (errorText) =>
    ({type: "form/SET-ERROR-TEXT", errorText});

// thunks
export const sendMessage = (name, email, message) => async (dispatch) => {
    // dispatch(setAppStatusAC("loading..."));
    try {
        await API.sendMessage(name, email, message);
        dispatch(setMessage(name, email, message));
    } catch (error) {
        dispatch(setErrorText("the form is filled out incorrectly"))
    }
    // dispatch(setAppStatusAC("idle"));
};