import { User } from '@/types/User';
import { axiosInstance } from './AxiosInstance';

export const me = async () => {
	const { data } = await axiosInstance.get('/user/me');
	return <User>data;
};
