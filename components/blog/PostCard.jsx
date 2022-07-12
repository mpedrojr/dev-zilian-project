import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';

const PostCard = ({ post }) => {
	return (
		<div>
			<div className='lg:h-[46rem] bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 mt-8'>
				<div className='relative overflow-hidden shadow-md pb-80 mb-6'>
					<img
						src={post.featuredImage.url}
						alt={post.title}
						className='object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
					/>
				</div>
				<div className='py-1 md:py-2 px-8 w-full flex justify-center rounded-lg'>
					<p className='text-xl text-amber-900 font-semibold tracking-wide'>
						{post.categories.map((category, i) => (
							<h1 key={i}>{category.name}</h1>
						))}
					</p>
				</div>

				<h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-md lg:text-xl font-semibold'>
					<Link href={`/post/${post.slug}`}>{post.title}</Link>
				</h1>
				<div className='flex items-center justify-center mb-8 w-full'>
					<div className='flex mr-8 items-center justify-center'>
						<img
							alt={post.author.name}
							height='30px'
							width='30px'
							className='align-middle justify-center rounded-full'
							src={post.author.photo.url}
						/>
						<p className='inline align-middle text-gray-700 ml-2 font-medium text-lg'>
							{post.author.name}
						</p>
					</div>
					<div className='font-medium text-gray-700 '>
						<span className='inline mr-2'>
							<FontAwesomeIcon icon={faCalendar} />
						</span>
						<span className='inline align-middle'>
							{format(new Date(post.createdAt), 'MM/dd/yyyy')}
						</span>
					</div>
				</div>
				<p className='text-center text-lg text-gray-700 font-normal px-6 lg:px-4 mb-8'>
					{post.excerpt}
				</p>
				<div className='text-center'>
					<Link href={`/post/${post.slug}`}>
						<span className='transition duration-500 ease transform hover:-translate-y-1 inline-block bg-amber-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
							Continue Reading
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
