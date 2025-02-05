import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';
import { Github, Mail } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import { Input } from '@/components/ui/input';
import { handleSignIn } from '@/utils';

const UserAuthCard: React.FC = () => {
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleGoogleLogin = () => {
		handleSignIn('google');
	};

	const handleGithubLogin = () => {
		handleSignIn('github');
	};

	const handleMagicLinkLogin = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Implement magic link login logic here
		console.log('Magic link login for:', email);
		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			setEmail('');
		}, 2000);
	};

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Welcome</CardTitle>
				<CardDescription>Choose your login method</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<Button
						variant="outline"
						onClick={handleGoogleLogin}
						className="w-full"
					>
						<svg
							className="mr-2 h-4 w-4"
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="google"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 488 512"
						>
							<path
								fill="currentColor"
								d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
							></path>
						</svg>
						Login with Google
					</Button>
					<Button
						variant="outline"
						onClick={handleGithubLogin}
						className="w-full"
					>
						<Github className="mr-2 h-4 w-4" />
						Login with GitHub
					</Button>
				</div>
				<div className="relative my-4">
					<Separator />
					<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-muted-foreground">
						Or
					</span>
				</div>
				<form onSubmit={handleMagicLinkLogin}>
					<div className="space-y-4">
						<Input
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? (
								<Mail className="mr-2 h-4 w-4 animate-spin" />
							) : (
								<Mail className="mr-2 h-4 w-4" />
							)}
							{isLoading ? 'Sending...' : 'Login with Magic Link'}
						</Button>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-center">
				<p className="text-xs text-center text-gray-600">
					By logging in, you agree to our Terms of Service and Privacy Policy.
				</p>
			</CardFooter>
		</Card>
	);
};

export default UserAuthCard;
