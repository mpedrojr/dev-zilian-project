import SignUpForm from '../components/forms/sign-up';

const SignUp = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 px-4 pb-32 pt-16 dark:bg-gray-900 sm:px-6 lg:px-8'>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
