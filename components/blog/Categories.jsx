import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <>
      <div className=' mb-24 mt-0 rounded-lg p-8 pb-12 bg-white dark:bg-gray-900 text-primary dark:text-gray-200 shadow-lg'>
        <h3 className='mb-4 border-b pb-2 text-xl font-semibold'>Categories</h3>
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span
              className={`block cursor-pointer ${
                index === categories.length - 1 ? 'border-b-0' : 'border-b'
              } mb-3 pb-3`}
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
