/** @format */

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LocalSearchbar from '@/components/shared/search/LocalSearchbar';
import Filter from '@/components/shared/Filter';
import { HomePageFilters } from '@/constants/filters';
import HomeFilters from '@/components/home/HomeFilters';
import NoResults from '@/components/shared/NoResults';
import QuestionCard from '@/components/cards/QuestionCard';
const questions = [
	{
		_id: 'q123',
		title: 'How to fix a memory leak in JavaScript?',
		tags: [
			{ _id: 't1', name: 'JavaScript' },
			{ _id: 't2', name: 'MemoryLeak' },
			{ _id: 't3', name: 'Debugging' },
		],
		author: {
			_id: 'a1',
			name: 'Jane Doe',
			picture: 'https://example.com/picture.jpg',
		},
		upvotes: 150,
		views: 1200,
		answers: [
			{
				text: 'First, identify the leak...',
				user: 'John Doe',
				createdAt: new Date(),
			},
			{
				text: 'Use Chrome DevTools to...',
				user: 'Alice Smith',
				createdAt: new Date(),
			},
		],
		createdAt: new Date('2023-01-01'),
	},
	{
		_id: 'q456',
		title: 'What is the best way to learn TypeScript?',
		tags: [
			{ _id: 't4', name: 'TypeScript' },
			{ _id: 't5', name: 'Learning' },
			{ _id: 't6', name: 'Programming' },
		],
		author: {
			_id: 'a2',
			name: 'Bob Brown',
			picture: 'https://example.com/picture2.jpg',
		},
		upvotes: 95,
		views: 800,
		answers: [
			{
				text: 'Start with the basics...',
				user: 'Cathy Green',
				createdAt: new Date(),
			},
			{
				text: 'The official TypeScript documentation...',
				user: 'Dave Blue',
				createdAt: new Date(),
			},
		],
		createdAt: new Date('2023-02-15'),
	},
];
export default function Home() {
	return (
		<>
			<div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
				<h1 className='h1-bold text-dark100_light900'>All Questions</h1>

				<Link
					href='/ask-question'
					className='flex justify-end max-sm:w-full'>
					<Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
						Ask a Question
					</Button>
				</Link>
			</div>

			<div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
				<LocalSearchbar
					route='/'
					iconPosition='left'
					imgSrc='/assets/icons/search.svg'
					placeholder='Search for questions'
					otherClasses='flex-1'
				/>

				<Filter
					filters={HomePageFilters}
					otherClasses='min-h-[56px] sm:min-w-[170px]'
					containerClasses='hidden max-md:flex'
				/>
			</div>
			<HomeFilters />
			<div className='mt-10 flex w-full flex-col gap-6'>
				{questions.length > 0 ? (
					questions.map((question) => (
						<QuestionCard
							key={question._id}
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={question.upvotes}
							views={question.views}
							answers={question.answers}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<NoResults
						title="There's no question to show"
						description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡'
						link='/ask-question'
						linkTitle='Ask a Question'
					/>
				)}
			</div>
		</>
	);
}
