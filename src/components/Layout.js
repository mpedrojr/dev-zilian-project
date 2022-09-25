import Navbar from './Navbar';
import Footer from './Footer';
// import { UserProvider } from '../../contexts/user.context';
import { SessionProvider } from 'next-auth/react';

const Layout = ({ children, session }) => {
  return (
    <div className='content'>
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default Layout;
