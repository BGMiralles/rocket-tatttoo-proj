import axios from 'axios';

export const logUser = async (body) => {

    console.log(body);
    let search =  await axios.post(`http://localhost:4004/user/login`, body);
    return search.data.token
}

export const logArtist = async (body) => {

    console.log(body);
    let search =  await axios.post(`http://localhost:4004/artist/login`, body);
    return search.data.token
}

export const registerUser = async (body) => {
    console.log(body);
    return await axios.post(`http://localhost:4004/user/register`, body);
}

export const bringTattooArtists = async () => {
    return await axios.get(`http://localhost:4004/artist/all`);
}

export const bringTattoo = async () => {
    return await axios.get(`http://localhost:4004/tattoo/all`);
}

export const updateProfile = async (profile, credentials) => {
    try {
      return await axios.put('http://localhost:4004/user/update', profile, {
        headers: { Authorization: `Bearer ${credentials}` }
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };