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
    },
    learnPage: {
        newWord: "Hello",
        newWordTranslation: "Привет",
        examplesWithNewWord: ["Hello?", "Hello!"],
        examplesWithNewWordTranslation: ["Привет?", "Привет!"],
        task: {},
        levelOfUser: "",
        newWordInfo: {
            partOfSpeech: "Noun",
            level: "A2"
        }
    },
    repeatPage: {
        knownWord: "Hello",
        task: {}
    }
}

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


export function GetNewWordThunkCreator() {

}

export function GetProfileDetailsThunkCreator() {
    return (dispatch) => {
        bilingoApi.getUserInfo()
            .then((data) => {
                dispatch(GetProfileDetailsActionCreator(data))})
        }
}

export function LoginThunkCreator(login, password) {
    return (dispatch) => {
        bilingoApi.login(login, password)
            .then((token) => {
                localStorage.setItem('token', token)
                dispatch(GetProfileDetailsThunkCreator())})
        }
}

export function LogoutThunkCreator() {
    return (dispatch) => {
        bilingoApi.logout()
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', '')
                dispatch(GetProfileDetailsThunkCreator())})
        }
}

export function RegisterThunkCreator(data) {
    return (dispatch) => {
        bilingoApi.register(data)
            .then((res) => {
                dispatch(LoginThunkCreator(data.email, data.password))})
        }
}
export function GetKnownWordThunkCreator() {
}
