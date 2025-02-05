import axios from 'axios';

export const instance = axios.create({
	baseURL: import.meta.env.VITE_HANOMI_BACKEND_URL,
	withCredentials: true
});
