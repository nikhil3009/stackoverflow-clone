/** @format */

import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
	mongoose.set('strictQuery', true);

	if (!process.env.MONGODB_URL) {
		return console.log('MISSING mongodb_url');
	}

	if (isConnected) {
		return console.log('mongoDb is connected');
	}
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			dbName: 'QuerryOverflow',
		});
		isConnected = true;
		console.log('Db is connected');
	} catch (error) {
		console.log(error);
	}
};
