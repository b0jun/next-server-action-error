'use server';
export async function getPost() {
	try {
		// API Call
		throw new Error('Email already exists', {
			cause: { status: 400 },
		});
	} catch (error) {
		throw error;
	}
}
