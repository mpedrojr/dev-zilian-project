import React from 'react';

import { feature } from '../../data/home-data';

const Features = () => {
  return (
    <section className='mx-auto dark:text-gray-100'>
      <div className='container mx-auto space-y-2 p-4 text-center'>
        <h2 className='mt-8 text-3xl font-bold text-primary dark:text-gray-200'>
          My main technologies
        </h2>
        <p className='text-primary dark:text-gray-200'>
          Also used in this website
        </p>
      </div>

      <div className='container mx-auto grid grid-cols-2 justify-center gap-4 px-2 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-24 xl:px-44'>
        {feature.map((feature) => (
          <div
            key={feature.name}
            className='flex flex-col items-center rounded-lg bg-primary dark:bg-gray-200 p-4 text-center text-white'
          >
            <p className='text-3xl dark:text-primary'>{feature.icon}</p>
            <h3 className='my-3 text-center text-xl font-semibold text-white dark:text-primary'>
              {feature.name}
            </h3>
            <div className='space-y-1 leading-tight'>
              <p className='text-center text-white dark:text-primary'>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
