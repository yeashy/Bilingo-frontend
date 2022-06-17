import { bilingoApi } from "../api/api";


const GET_PROFILE_DETAILS = 'GET_PROFILE_DETAILS';
const GET_NEW_WORD = 'GET_NEW_WORD';
const GET_EXERCISE = 'GET_EXERCISE';
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
        id: 612,
        word: "create",
        level: "A1",
        phonetic: "/kɹiːˈeɪt/",
        translations: ["создать",
        "создавать",],
        examples: [{
            value: "It could <em>create</em> enough reasonable doubt to clear Spencer.",
            translation: "Это может <em>создать</em> достаточно разумные сомнения, чтобы доказать невиновность Спенсер."
        }],
        partsOfSpeech: ["verb", "adjective"]
    },
    exercise : {},
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
        case GET_NEW_WORD:
            newState.learnPage = action.learnPage
            return newState

        case GET_EXERCISE:
            newState.exercise = action.exercise
            return newState
        default:
            return newState;
    }
}

function GetProfileDetailsActionCreator(profile) {
    return { type: GET_PROFILE_DETAILS, profile: profile }
}

function GetNewWordActionCreator(learnPage) {
    return { type: GET_NEW_WORD, learnPage: learnPage }
}

function GetRandomExerciseActionCreator(exercise) {
    return { type: GET_EXERCISE, exercise: exercise }
}

export function GetNewWordThunkCreator() {
    return (dispatch) => {
        bilingoApi.getNewWord()
            .then((data) => {
                dispatch(GetNewWordActionCreator(data))
                dispatch(GetRandomExerciseThunkCreator(data.id))
            })
    }
}

export function GetRandomExerciseThunkCreator(id) {
    return (dispatch) => {
        bilingoApi.getRandomExercise(id)
            .then((data) => {
                dispatch(GetRandomExerciseActionCreator(data))
            })
    }
}
export function GetProfileDetailsThunkCreator() {
    return (dispatch) => {
        bilingoApi.getUserInfo()
            .then((data) => {
                dispatch(GetProfileDetailsActionCreator(data))
            })
    }
}

export function LoginThunkCreator(login, password) {
    return (dispatch) => {
        bilingoApi.login(login, password)
            .then((token) => {
                localStorage.setItem('token', token)
                dispatch(GetProfileDetailsThunkCreator())
            })
    }
}

export function LogoutThunkCreator() {
    return (dispatch) => {
        bilingoApi.logout()
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', '')
                dispatch(GetProfileDetailsThunkCreator())
            })
    }
}

export function RegisterThunkCreator(data) {
    return (dispatch) => {
        bilingoApi.register(data)
            .then((res) => {
                dispatch(LoginThunkCreator(data.email, data.password))
            })
    }
}
export function GetKnownWordThunkCreator() {
}
