import React from 'react';

import { feature } from '../../data/featuresData';

const Features = () => {
  return (
    <section className='mx-auto dark:text-gray-100'>
      <div className='container mx-auto space-y-2 p-4 text-center'>
        <h2 className='mt-8 text-3xl font-bold text-primary'>
          My main technologies
        </h2>
        <p className='text-primary dark:text-gray-600'>
          Also used in this website
        </p>
      </div>

      <div className='container mx-auto grid grid-cols-2 justify-center gap-4 px-2 pb-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-24 xl:px-44'>
        {feature.map((feature) => (
          <div
            key={feature.name}
            className='flex flex-col items-center rounded-lg bg-primary p-4 text-center text-white'
          >
            <p className='text-3xl'>{feature.icon}</p>
            <h3 className='my-3 text-center text-xl font-semibold text-white'>
              {feature.name}
            </h3>
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
