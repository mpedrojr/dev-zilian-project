import { useState, useEffect } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import { getSimilarPosts, getFeaturedPosts } from '../../services';

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(categories, slug).then((result) => {
				setRelatedPosts(result);
			});
		} else {
			getFeaturedPosts().then((result) => {
				setRelatedPosts(result);
			});
		}
	}, [slug]);

	return (
		<>
			<div className=' shadow-lg rounded-lg p-8 pb-12 mb-8 lg:mt-0'>
				<h3 className='text-xl text-primary mb-8 font-semibold border-b pb-4'>
					{slug ? 'Related Posts' : 'Featured Posts'}
				</h3>
				{relatedPosts.map((post, index) => (
					<div key={index} className='flex items-center w-full mb-4'>
						<div className='w-16 flex-none'>
							<img
								alt={post.title}
								height='60px'
								width='60px'
								className='align-middle rounded-lg'
								src={post.featuredImage.url}
							/>
						</div>
						<div className='flex-grow ml-4'>
							<p className='text-gray-500 font-xs'>
								{format(new Date(post.createdAt), 'MM/dd/yyyy')}
							</p>
							<Link href={`/post/${post.slug}`} className='text-md' key={index}>
								{post.title}
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default PostWidget;
