import axios from 'axios';

export const logUser = async (body) => {

    console.log(body);

    // SIMULACRO DE CONEXION REAL A API
    let search =  await axios.post(`http://localhost:4004/user/login`, body);
    return search.data.token

    // return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiZGF2aWRAZGF2aWQuY29tIiwiaWF0IjoxNjk5NTMwMDY1LCJleHAiOjE2OTk1NDA4NjV9.UNMBvL7RwP6JylDq9Ut4r5ach9HGVKqBm-5yv0-w_B4`;

}

export const registerUser = async (body) => {

    console.log(body);

    return await axios.post(`http://localhost:4004/user/register`, body);
    

}