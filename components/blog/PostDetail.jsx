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
				<h1 className='mb-8 text-xl lg:text-2xl font-semibold'>{post.title}</h1>
				<div className='relative overflow-hidden shadow-md mb-6'>
					<img
						src={post.featuredImage.url}
						alt=''
						className='object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg'
					/>
				</div>
				<div className='py-1 md:py-2 px-8 w-full flex justify-center rounded-lg'>
					<p className='text-xl text-amber-900 font-semibold tracking-wide'>
						{post.categories.map((category, i) => (
							<h1 key={i}>{category.name}</h1>
						))}
					</p>
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
