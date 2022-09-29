import { useState } from 'react';

import { frontHome, backHome } from '../../data/home-data';

const Features = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTab1 = () => {
    setActiveTab('tab1');
  };
  const handleTab2 = () => {
    setActiveTab('tab2');
  };

  return (
    <section className='mx-auto dark:text-gray-100'>
      <div className='container mx-auto space-y-2 p-4 text-center'>
        <h2 className='mt-8 text-3xl font-bold text-primary dark:text-gray-200'>
          My main technologies
        </h2>
        <p className='text-xl text-primary dark:text-gray-200'>
          Also used in this website
        </p>
      </div>

      <div className='py-2 pb-16 text-gray-900 dark:text-gray-200'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 p-4 md:p-8'>
            <div className='col-span-full mb-8 flex justify-center px-4 text-lg font-semibold md:col-span-1 md:flex-col md:items-start md:justify-start'>
              <button
                onClick={handleTab1}
                className={
                  activeTab === 'tab1'
                    ? 'border-b-2 border-violet-500 px-2 py-1 text-gray-900 dark:text-gray-200 md:border-l-2 md:border-b-0 md:py-3'
                    : 'border-b-2 border-gray-300 p-2 text-gray-500 md:border-l-2 md:border-b-0 md:py-3'
                }>
                Front-End
              </button>
              <button
                onClick={handleTab2}
                className={
                  activeTab === 'tab2'
                    ? 'border-b-2 border-violet-500 px-2 py-1 text-gray-900 dark:text-gray-200 md:border-l-2 md:border-b-0 md:py-3'
                    : 'border-b-2 border-gray-300 p-2 text-gray-500 md:border-l-2 md:border-b-0 md:py-3'
                }>
                Back-End
              </button>
            </div>
            <div className='col-span-full grid gap-12 py-4 px-12 text-center sm:grid-cols-2 md:col-span-4 md:text-left'>
              {frontHome.map((list) => (
                <div
                  key={list.title}
                  className={
                    activeTab === 'tab1'
                      ? 'flex flex-col items-center justify-center space-y-3 rounded-lg border-2 border-gray-200 p-4 dark:border-gray-200 md:items-start md:justify-start'
                      : 'hidden'
                  }>
                  <p className='text-5xl'>{list.icon}</p>

                  <h5 className='text-xl font-semibold lg:text-2xl'>
                    {list.title}
                  </h5>
                  <p className='lg:pr-32'>{list.description}</p>
                </div>
              ))}

              {backHome.map((list) => (
                <div
                  key={list.title}
                  className={
                    activeTab === 'tab2'
                      ? 'flex flex-col items-center justify-center space-y-3 rounded-lg border-2 border-gray-200 p-4  dark:border-gray-200 md:items-start md:justify-start'
                      : 'hidden'
                  }>
                  <p className='text-5xl'>{list.icon}</p>
                  <h5 className='text-xl font-semibold lg:text-2xl'>
                    {list.title}
                  </h5>
                  <p className='lg:pr-32'>{list.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
