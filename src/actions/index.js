import axios from 'axios';
import { PLACEHOLDER } from './types';


export function signUp(fields) {
    return function(dispatch) {
        axios.post('http://localhost:8080/api/signup', {
            ...fields
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export function signIn({email, password}) {
    return function(dispatch) {
        axios.post('http://localhost:8080/api/signin', {
            email, password
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err=> {
                console.log(err);
            })
    }
}



// // Example GET request
// export function apiGetFunction() {
//     return function(dispatch) {
//         axios.get("insert API here")
//             .then(response => {
//                 dispatch({
//                     type: PLACEHOLDER,
//                     payload: response
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
// }

// // Example POST request
// export function apiPostFunction(argument) {
//     return function() {
//         axios.post("insert API here", {
//             ...argument
//         })
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
// }