import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_HANOMI_BACKEND_URL,
	withCredentials: true
});
