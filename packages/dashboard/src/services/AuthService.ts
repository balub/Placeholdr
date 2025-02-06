import axios from 'axios';
import { axiosInstance } from './AxiosInstance';

export const sendMagicLink = async (email: string) => {
	return await axiosInstance.post('/auth/magic-link', { email });
};

export const refresh = async () => {
	return await axiosInstance.get('/auth/refresh');
};
