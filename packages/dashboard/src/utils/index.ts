export const handleSignIn = (endpoint: string) => {
	const url = `http://localhost:3170/v1/auth/${endpoint}`;
	window.open(url, '_blank');
};
