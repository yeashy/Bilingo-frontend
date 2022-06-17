import axios from "axios";

const baseURL = 'https://localhost:7199/';

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('token')
    },
});

function getUserInfo() {
    return instance.get('getUserInfo')
        .then((result) => {
            return result.data
        })
}

function login(email, password) {
    return instance.post('login', { email: email, password: password })
        .then((result) => {
            return result.data.token;
        })
}

function logout() {
    return instance.post('logout')
        .then((result) => {
            console.log(result)
            return result
        })
}

function register(data) {
    return instance.post('register', {...data})
        .then((result) => {
            console.log(result)
            return result
        })
}

function getNewWord(){
    return instance.get('getNewWord')
        .then((result) => {
            return result.data
        })
}

function getRandomExercise(id){
    return instance.get(`getRandomExercise/${id}`)
        .then((result) => {
            return result.data
        })
}

export const bilingoApi = {
    getUserInfo: getUserInfo,
    login: login,
    logout : logout,
    register : register,
    getNewWord : getNewWord,
    getRandomExercise : getRandomExercise
}