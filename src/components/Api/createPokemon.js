import axios from "axios"

const API = "http://localhost:4000"

export const createPokemon = async (pokemon) => {
    const { data } = await axios.post(`${API}/pokemon`, pokemon);
    return data;
};

