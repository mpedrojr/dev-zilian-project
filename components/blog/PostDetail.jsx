import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';


const PostDetail = ({ post }) => {
	return (
		<>
			<div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 mt-0'>
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
				<div className='overflow-hidden mb-6'>
					<Image
						src={post.featuredImage.url}
						alt=''
						height={410}
						width={800}
						className='object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
					/>
				</div>
				<div className='px-4 lg:px-0 mt-4'>
					<div className='mb-10'>
						{/* Rich Text Begin */}

						<RichText
							content={post.content.raw.children}
							renderers={{
								img: ({ src, altText, height, width }) => (
									<div className='flex justify-center mt-10 mb-10'>
										<img
											src={src}
											alt={altText}
											height={height}
											width={width}
										/>
									</div>
								),
								blockquote: ({ children }) => (
									<blockquote>{children}</blockquote>
								),
								ul: ({ children }) => <ul>{children}</ul>,
								ol: ({ children }) => <ol>{children}</ol>,
								li: ({ children }) => <li>{children}</li>,
								p: ({ children }) => (
									<p className='leading-relaxed text-base mb-4'>{children}</p>
								),
								h1: ({ children }) => (
									<h1 className='leading-loose text-xl'>{children}</h1>
								),
								h2: ({ children }) => (
									<h2 className='leading-loose text-lg font-semibold'>
										{children}
									</h2>
								),
								h3: ({ children }) => (
									<h3 className='leading-loose text-base font-semibold'>
										{children}
									</h3>
								),
								h4: ({ children }) => (
									<h4 className='leading-loose text-sm font-semibold'>
										{children}
									</h4>
								),
								h5: ({ children }) => <h5>{children}</h5>,
								h6: ({ children }) => <h6>{children}</h6>,
								table: ({ children }) => <table>{children}</table>,
								table_head: ({ children }) => <thead>{children}</thead>,
								table_body: ({ children }) => <tbody>{children}</tbody>,
								table_row: ({ children }) => <tr>{children}</tr>,
								table_cell: ({ children }) => <td>{children}</td>,
								table_header_cell: ({ children }) => <th>{children}</th>,
								bold: ({ children }) => <b>{children}</b>,
								italic: ({ children }) => <i>{children}</i>,
								underline: ({ children }) => <u>{children}</u>,
								code: ({ children }) => <code>{children}</code>,
								code_block: ({ children }) => (
									<pre className='bg-black text-white font-code px-2 py-6 mb-4 whitespace-pre overflow-x-auto  '>
										{children}
									</pre>
								),

								a: ({ children, openInNewTab, href, rel, ...rest }) => {
									if (href.match(/^https?:\/\/|^\/\//i)) {
										return (
											<a
												className='text-blue-800'
												href={href}
												rel="noreferrer"
												target={openInNewTab ? '_blank' : '_self'}
												rel={rel || 'noopener noreferrer'}
												{...rest}>
												{children}
											</a>
										);
									}
									return (
										<Link href={href}>
											<a {...rest}>{children}</a>
										</Link>
									);
								},
							}}
						/>

						{/* Rich Text End */}
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
