import PasswordRecovery from '../components/forms/forgotPassword';

const ForgotPassword = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 px-4 pb-32 pt-16 dark:bg-gray-900 sm:px-6 lg:px-8'>
      <PasswordRecovery />
    </div>
  );
};

export default ForgotPassword;
