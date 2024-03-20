'use client';

import { getPost } from '@/actions/actions';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		const callApi = async () => {
			try {
				await getPost();
			} catch (error: any) {
				console.error(error.cause); // undefined
			}
		};

		callApi();
	}, []);
	return <div>Server Action Error Test</div>;
}
