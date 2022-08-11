import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import Link from 'next/link';
import { useRouter } from 'next/router';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

      if (user) {
        router.push('/profile');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Cannot create user! Email already in use.');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='mb-12 w-full max-w-md space-y-8'>
      <div className='mb-12 justify-center text-center'>
        <p className='mt-2 text-3xl font-extrabold  text-primary dark:text-gray-100 lg:text-4xl'>
          Create an account
        </p>
        <Link href='/signin'>
          <button className='text-md mt-4 max-w-2xl font-medium text-blue-800 dark:text-amber-500 lg:mx-auto lg:text-lg'>
            Already have an account?
          </button>
        </Link>
      </div>
      <div className='text-center'>
        {errorMessage && (
          <p className='error font-medium text-red-800 dark:text-amber-500'>
            {errorMessage}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Name
          </label>
          <input
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary placeholder-primary lg:text-lg'
            placeholder='Enter your name here'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary placeholder-primary xl:text-lg'
            placeholder='Your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary placeholder-primary xl:text-lg'
            placeholder='Enter your password'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary dark:text-gray-100 lg:text-lg'>
            Confirm password
          </label>
          <input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary placeholder-primary xl:text-lg'
            placeholder='Confirm your password'
            required
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700 lg:text-lg'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
