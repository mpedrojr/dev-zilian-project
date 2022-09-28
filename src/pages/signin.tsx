import { FC, useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import {
  getProviders,
  signIn,
  ClientSafeProvider,
  LiteralUnion,
} from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers';

const defaultFormFields = {
  email: '',
};

const SignIn: FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email } = formFields;

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders();
      setProviders(setupProviders);
    };
    setTheProviders();
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (!email) return false;
      await signIn('email', { email, redirect: false });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 px-4 pb-32 pt-16 dark:bg-gray-900 sm:px-6 lg:px-8'>
      <div className='mb-28 w-full max-w-md space-y-8'>
        <div className='mb-12 text-center'>
          <p className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-primary dark:text-gray-100 lg:text-4xl'>
            Sign In
          </p>
        </div>
        <div className='mt-2'>
          <div className='mb-12'>
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
              <div className='mt-6'>
                <button
                  type='submit'
                  className='group relative flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
                  <span className='ml-2'>Sign in</span>
                </button>
              </div>
            </form>
          </div>

          <button
            type='button'
            onClick={() => signIn(providers.google.id)}
            className='group relative flex w-full items-center justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-amber-700'>
            <span>
              <FaGoogle className='h-6 w-6' />
            </span>
            <span className='ml-2'>Continue with Google</span>
          </button>

          {/* <button
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
        </button> */}
        </div>
      </div>
    </div>
  );
};
export default SignIn;
