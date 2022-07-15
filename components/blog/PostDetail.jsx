import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';

const PostDetail = ({ post }) => {
	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-three':
				return (
					<h3 key={index} className='text-xl mb-4'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case 'paragraph':
				return (
					<p key={index} className='mb-6'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case 'heading-four':
				return (
					<h4 key={index} className='text-md font-semibold mb-4'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case 'image':
				return (
					<img
						key={index}
						alt={obj.title}
						height={obj.height}
						width={obj.width}
						src={obj.src}
					/>
				);
			default:
				return modifiedText;
		}
	};

	return (
		<>
			<div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 mt-8'>
				
				<div className='px-2 md:py-2 mb-0 w-full flex justify-start rounded-lg'>
					<span className='px-0 py-1 mb-0 text-sm rounded-full dark:text-gray-900'>
						{post.categories.map((category, i) => (
							<h1 className='text-primary font-semibold' key={i}>
								{category.name}
							</h1>
						))}
					</span>
				</div>

				<h1 className='px-2 pt-1 mb-4 text-lg lg:text-3xl font-bold'>
					{post.title}
				</h1>

				<div className='relative overflow-hidden shadow-md mb-6'>
					<img
						src={post.featuredImage.url}
						alt=''
						className='object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
					/>
				</div>

				<div className='px-4 lg:px-0 mt-4'>
					<div className='mb-10'>
						{post.content.raw.children.map((typeObj, index) => {
							const children = typeObj.children.map((item, itemindex) =>
								getContentFragment(itemindex, item.text, item)
							);

							return getContentFragment(index, children, typeObj, typeObj.type);
						})}
					</div>
					<div className='flex items-center justify-center border-t border-gray-200 pt-10 mb-2 w-full'>
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
				</div>
			</div>
		</>
	);
};

export default PostDetail;
