import axios from 'axios';

export const logUser = async (body) => {

    console.log(body);

    // SIMULACRO DE CONEXION REAL A API
    let search =  await axios.post(`http://localhost:4004/user/login`, body);
    return search.data.token
}

export const registerUser = async (body) => {

    console.log(body);

    return await axios.post(`http://localhost:4004/user/register`, body);
}

export const bringCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=1`);
}