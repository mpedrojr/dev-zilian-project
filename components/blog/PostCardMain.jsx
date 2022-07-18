import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import Image from 'next/image';


const PostCardMain = ({ post }) => {
	return (
		<>
			<div className='container dark:text-gray-50 mt-10 lg:mt-0'>
				<div className='lg:grid grid-cols-12 mx-auto '>
					<div className='flex lg:block lg:w-auto lg:h-auto lg:pt-14  rounded-lg mb-4 lg:mb-0 order-first lg:order-last justify-center row-span-full col-span-full lg:col-span-3'>
						<Image
							src={post.featuredImage.url}
							alt={post.title}
							height={350}
							width={700}
							className='rounded-lg'
						/>
					</div>
					<div className='flex order-last lg:order-first flex-col p-1 col-span-full row-span-full lg:col-span-9 lg:p-10'>
						<div className='flex justify-start'>
							<span className='px-3 py-1 mb-2 text-xs rounded-full dark:bg-primary dark:text-gray-900'>
								{post.categories.map((category, i) => (
									<h1 className='text-white' key={i}>
										{category.name}
									</h1>
								))}
							</span>
						</div>
						<h1 className='text-md lg:text-xl font-semibold text-black'>
							<Link href={`/post/${post.slug}`}>{post.title}</Link>
						</h1>
						<p className='flex-1 pt-2 text-black sm:flex'>{post.excerpt}</p>
						<Link href={`/post/${post.slug}`}>
							<a
								rel='noopener noreferrer'
								href='#'
								className='inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-black'>
								<span>Read more</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-4 h-4'>
									<path
										fillRule='evenodd'
										d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</a>
						</Link>
						<div className='flex items-center space-x-4 pt-2'>
							<div className='flex space-x-2'>
								<img
									alt={post.author.name}
									height='30px'
									width='30px'
									className='align-middle justify-center rounded-full'
									src={post.author.photo.url}
								/>
								<span className='self-center text-sm text-black'>
									{post.author.name}
								</span>
							</div>
							<span className='text-xs'>
								<span className='inline mr-1 text-black'>
									<FontAwesomeIcon icon={faCalendar} />
								</span>
								<span className='inline align-middle text-black'>
									{format(new Date(post.createdAt), 'MM/dd/yyyy')}
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-10  lg:mt-0 border-b border-gray-300'></div>
		</>
	);
};

export default PostCardMain;
