import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase.utils';

import Link from 'next/link';

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
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Cannot create user! Email already in use.');
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
        <p className='mt-2 text-2xl font-extrabold leading-8 tracking-tight text-primary sm:text-3xl'>
          Create an account
        </p>
        <Link href='/signin'>
          <button className='text-md mt-4 max-w-2xl font-medium text-blue-800 lg:mx-auto'>
            Already have an account?
          </button>
        </Link>
      </div>
      <div className='text-center'>
        {errorMessage && (
          <p className='error font-medium text-red-800'>{errorMessage}</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary'>
            Name
          </label>
          <input
            type='text'
            id='displayName'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary placeholder-primary'
            placeholder='Enter your name here'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='block w-full  rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary  placeholder-primary'
            placeholder='Your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            className='block w-full   rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary  placeholder-primary '
            placeholder='Leave your message'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-sm font-medium text-primary'>
            Confirm password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            className='block w-full   rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-sm text-primary  placeholder-primary '
            placeholder='Confirm your password'
            required
          />
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;