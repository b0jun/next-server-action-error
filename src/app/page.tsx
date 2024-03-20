'use client';

import { getPost } from '@/actions/actions';
import { useEffect, useState } from 'react';

export default function Home() {
	const [errorStatus, setErrorStatus] = useState();
	const [errorCode, setErrorCode] = useState();

	useEffect(() => {
		const callApi = async () => {
			try {
				await getPost();
			} catch (error: any) {
				console.error(error.cause); // undefined
				setErrorStatus(error.cause?.status);
				setErrorCode(error.cause?.code);
			}
		};

		callApi();
	}, []);
	return (
		<div>
			<h3>Server Action Error Test</h3>
			<p>Error Status: {errorStatus}</p>
			<p>Error Code: {errorCode}</p>
		</div>
	);
}
