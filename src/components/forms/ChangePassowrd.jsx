import React, { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const ChangePassword = () => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return null;
  }

  return (
    <div className='mb-12 w-full max-w-md space-y-8'>
      <div className='mb-4 justify-center text-center'>
        <p className='mt-2 text-2xl font-extrabold  text-primary dark:text-gray-100 lg:text-3xl'>
          Your profile
        </p>
      </div>

      <form>
        <div className='mb-4'>
          <label className='mb-4 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Your Email
          </label>
          <p className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary dark:bg-gray-900 dark:text-gray-100 lg:text-lg'>
            {currentUser.email}
          </p>
        </div>
        {/* <div className='mb-4'>
          <label className='mb-4 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            New password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-center text-sm text-primary placeholder-primary dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 lg:text-lg'
            placeholder='Enter new password'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-4 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Confirm new password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className='block w-full rounded-lg border  border-gray-600 bg-gray-50 p-2.5 text-center text-sm text-primary placeholder-primary dark:bg-gray-900 dark:text-gray-100  dark:placeholder-gray-400 lg:text-lg'
            placeholder='Confirm your new password'
            required
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md border border-transparent border-gray-600 bg-primary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-blue-600 lg:text-lg'>
            Submit
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default ChangePassword;
