// import axios from 'axios';
import { PLACEHOLDER } from './types';


export function functionPlaceholder(argument) {
    return ({
        type: PLACEHOLDER,
        payload: argument
    });
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