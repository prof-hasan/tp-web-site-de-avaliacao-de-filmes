import axios from "axios";

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const evolutionApi = axios.create({
	baseURL: process.env.REACT_APP_EVOLUTION_API, 
	headers: {apikey: process.env.REACT_APP_EVOLUTIONAPI_APIKEY, 'Content-Type': 'application/json'},
});


export default api;
