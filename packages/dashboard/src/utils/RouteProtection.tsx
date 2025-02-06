import { refresh } from '@/services/AuthService';
import { me } from '@/services/UserService';
import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
	protectionNeeded: boolean;
	children: ReactElement;
}

const RouteProtection = ({ protectionNeeded, children }: Props) => {
	if (!protectionNeeded) return children;

	const { isPending, isError } = useQuery({
		queryKey: ['checkSession'],
		queryFn: me,
		retry: false,
		refetchOnWindowFocus: false
	});

	const refreshSession = useQuery({
		queryKey: ['refreshSession'],
		queryFn: refresh,
		enabled: !!isError,
		retry: false
	});

	if (isPending) {
		return <span>111Loading...</span>;
	}

	// If request to refresh tokens fails, redirect to signin page
	if (refreshSession.isError) {
		return <Navigate to="/signin" replace />;
	}

	if (protectionNeeded && !isPending && !isError) {
		return children;
	}
};

export default RouteProtection;
