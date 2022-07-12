import Navbar from "../Navbar";
import Footer from "../Footer";
import { UserProvider } from "../../contexts/user.context";

const Layout = ({ children }) => {
	return (
		<div className="content">
			<UserProvider>
			<Navbar />
			{children}
			<Footer />
			</UserProvider>
		</div>
	);
};

export default Layout;
