import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user.context';
import Link from 'next/link';
import {
  signInWithGooglePopup,
  signInWithGithub,
  signInWithFacebook,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase.utils';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { useRouter } from 'next/router';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [errorMessage, setErrorMessage] = useState('');
  const { setCurrentUser } = useContext(UserContext);
  const router = useRouter();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //* Google !//
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    if (user) {
      router.push('/profile');
    }
  };
  //* Google !//
  //* Github //
  const signInWithGithubApp = async () => {
    try {
      const { user } = await signInWithGithub();
      setCurrentUser(user);
      if (user) {
        router.push('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //* Github //
  //* FaceBook //
  const signInWithFacebookApp = async () => {
    try {
      const { user } = await signInWithFacebook();
      setCurrentUser(user);
      if (user) {
        router.push('/profile');
      }
    } catch (error) {
      console.log(error);
    }
  };
  //* FaceBook //
  //* Twitter //
  //* Twitter //

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
      setCurrentUser(user);

      if (user) {
        router.push('/profile');
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setErrorMessage('Incorrect email or password.');
          break;
        case 'auth/user-not-found':
          setErrorMessage('Incorrect email or password.');
          break;
        default:
          error;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='mb-28 w-full max-w-md space-y-8'>
      <div className='mb-12 text-center'>
        <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-primary dark:text-gray-100 lg:text-4xl'>
          Sign In
        </p>
        <Link href='/signup'>
          <button className='mt-4 max-w-2xl text-base font-medium text-blue-800 dark:text-amber-500 lg:mx-auto'>
            Do not have an account?
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
          <label className='mb-1 block text-base font-medium text-primary dark:text-gray-100'>
            Your email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            className='block w-full  rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-base text-primary placeholder-primary'
            placeholder='Your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='mb-1 block text-base font-medium text-primary dark:text-gray-100'>
            Your password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange}
            className='block w-full rounded-lg border border-gray-600 bg-gray-50 p-2.5 text-base text-primary placeholder-primary'
            placeholder='Your password'
            required
          />
        </div>
        <div className='text-center'>
          <Link href='/forgotpassword'>
            <button className='max-w-2xl text-center text-base font-medium text-blue-800 dark:text-amber-500 lg:mx-auto'>
              Forgot your password?
            </button>
          </Link>
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='group relative flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
            <span>
              <FiLogIn />
            </span>
            <span className='ml-2'>Sign in</span>
          </button>
        </div>
      </form>
      <div>
      <div className='mb-6 flex w-full justify-center align-middle'>
          <h3 className='text-xl font-medium text-blue-800 dark:text-gray-100'>
            OR
          </h3>
        </div>
        <button
          type='button'
          onClick={signInWithGoogle}
          className='group relative flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
          <span>
            <FaGoogle />
          </span>
          <span className='ml-2'>Continue with Google</span>
        </button>
        <button
          type='button'
          onClick={signInWithGithubApp}
          className='group relative mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
          <span>
            <BsGithub className='h-6 w-6' />
          </span>
          <span className='ml-2'>Continue with Github</span>
        </button>
        <button
          type='button'
          onClick={signInWithFacebookApp}
          className='group relative mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
          <span>
            <BsFacebook className='h-6 w-6' />
          </span>
          <span className='ml-2'>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
