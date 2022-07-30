import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { format } from 'date-fns';

import { getComments } from '../../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className='rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg lg:mb-8 lg:pb-12'>
          <h3 className='mb-8 border-b pb-4 text-xl font-semibold'>
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className='mb-4 border-b border-gray-100 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span> on{' '}
                {format(new Date(comment.createdAt), 'MM/dd/yyyy')}
              </p>
              <p className='w-full whitespace-pre-line text-gray-600 dark:text-gray-200'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
