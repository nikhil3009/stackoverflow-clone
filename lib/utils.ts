/** @format */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const getTimestamp = (createdAt: Date): string => {
	const now = new Date().getTime(); // Get current time in milliseconds
	const past = new Date(createdAt).getTime(); // Convert input date to milliseconds
	const diffInSeconds = Math.floor((now - past) / 1000);
	const diffInMinutes = Math.floor(diffInSeconds / 60);
	const diffInHours = Math.floor(diffInMinutes / 60);
	const diffInDays = Math.floor(diffInHours / 24);
	const diffInWeeks = Math.floor(diffInDays / 7);
	const diffInMonths = Math.floor(diffInDays / 30);
	const diffInYears = Math.floor(diffInDays / 365);

	if (diffInSeconds < 60) {
		return `${diffInSeconds} seconds ago`;
	} else if (diffInMinutes < 60) {
		return `${diffInMinutes} minutes ago`;
	} else if (diffInHours < 24) {
		return `${diffInHours} hours ago`;
	} else if (diffInDays < 7) {
		return `${diffInDays} days ago`;
	} else if (diffInWeeks < 4) {
		return `${diffInWeeks} weeks ago`;
	} else if (diffInMonths < 12) {
		return `${diffInMonths} months ago`;
	} else {
		return `${diffInYears} years ago`;
	}
};
export const formatNumberWithSuffix = (number: number): string => {
	// Divide and format for millions
	if (number >= 1_000_000) {
		return (number / 1_000_000).toFixed(2) + 'M';
	}
	// Divide and format for thousands
	else if (number >= 1_000) {
		return (number / 1_000).toFixed(2) + 'K';
	}
	// Return the number as is if less than 1000
	else {
		return number.toString();
	}
};
