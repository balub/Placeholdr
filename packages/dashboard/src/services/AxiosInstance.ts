import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_PLACEHOLDR_BACKEND_URL,
	withCredentials: true
});
