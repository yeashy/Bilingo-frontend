import { bilingoApi } from "../api/api";

const GET_PROFILE_DETAILS = 'GET_PROFILE_DETAILS';
const initialState = {
    profile: {
        firstName: "nickname",
        lastName: "John",
        email: "qwe@mail.com",
        age: 21,
        gender: "Male",
        progress: {}
    }
};

export function bilingoReducer(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
        case GET_PROFILE_DETAILS:
            newState.profile = action.profile
            return newState
        default:
            return newState;
    }
}

function GetProfileDetailsActionCreator(profile) {
    return { type: GET_PROFILE_DETAILS, profile: profile }
}

export function GetProfileDetailsThunkCreator() {
    return (dispatch) => {
        bilingoApi.getUserInfo()
            .then((data) => {
                dispatch(GetProfileDetailsActionCreator(data))
            })
    }
}
