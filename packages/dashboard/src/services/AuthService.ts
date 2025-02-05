import { axiosInstance } from './AxiosInstance';

export const sendMagicLink = async (email: string) => {
	return await axiosInstance.post('/auth/magic-link', { email });
};
