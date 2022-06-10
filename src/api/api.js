import axios from "axios";

const baseURL = 'https://localhost:7199/';

const instance = axios.create({
    baseURL : baseURL,
    headers: {
        'Access-Control-Allow-Origin' : "*",
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + localStorage.getItem('token')
    },
});

function getUserInfo(){
    return instance.get('getUserInfo')
    .then((result) => {
        return result.data
    }).catch((err) => {
        //console.log(err)
    });
}

export const bilingoApi = {
    getUserInfo : getUserInfo
}