import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const handleSignIn = (endpoint: string) => {
	const url = `http://localhost:3170/v1/auth/${endpoint}`;
	window.open(url, '_blank');
};
