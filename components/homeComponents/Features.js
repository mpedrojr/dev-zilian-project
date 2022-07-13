import React from 'react';

import { feature } from '../../data/featuresData';

const Features = () => {
	return (
		<section className='m-4 md:m-8 lg:px-40  dark:text-gray-100'>
			<div className='container mx-auto p-4 my-6 space-y-2 text-center'>
				<h2 className='mt-20 text-3xl font-bold text-primary'>My main technologies</h2>
				<p className='dark:text-gray-400 text-primary'>Also used in this website</p>
			</div>
			
			<div className='container mx-auto grid justify-center gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
			{feature.map((feature) => (
				<div key={feature.name} className='flex bg-primary rounded-lg flex-col items-center p-4 text-white text-center'>
					<p className='text-3xl'>{feature.icon}</p>
					<h3 className='my-3 text-xl text-center font-semibold text-white'>{feature.name}</h3>
					<div className='space-y-1 leading-tight'>
						<p className='text-center text-white'>{feature.description}</p>
					</div>
				</div>
				))}
			</div>
			
		</section>
	);
};

export default Features;


