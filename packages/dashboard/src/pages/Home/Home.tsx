import { me } from '@/services/UserService';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Home: React.FC = () => {
	const { isPending, data } = useQuery({
		queryKey: ['me'],
		queryFn: me,
		enabled: true,
		refetchOnWindowFocus: true
	});

	if (isPending) return <p>Loading.....</p>;

	return (
		<div>
			<p>Home Page</p>
			<p>{data?.email}</p>
		</div>
	);
};

export default Home;
