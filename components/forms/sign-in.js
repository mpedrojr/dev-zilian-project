import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import Link from "next/link";
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	const [errorMessage, setErrorMessage] = useState("");

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	//! Google !//
	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		setCurrentUser(user);
	};
	//! Google !//

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			resetFormFields();
			setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					setErrorMessage("Incorrect email or password.");
					break;
				case "auth/user-not-found":
					setErrorMessage("Incorrect email or password.");
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
		<div className="max-w-md w-full space-y-8 mb-28">
			<div className="text-center mb-12">
				<p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-primary sm:text-3xl">
					Sign In
				</p>
				<Link href="/signup">
					<button className="mt-4 max-w-2xl text-md text-blue-800 font-medium lg:mx-auto">
						Do not have an account?
					</button>
				</Link>
			</div>
			<div className="text-center">
				{errorMessage && (
					<p className="error text-red-800 font-medium">{errorMessage}</p>
				)}
			</div>

			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block mb-1 text-sm font-medium text-primary">
						Your email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={handleChange}
						className="text-sm rounded-lg  block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary"
						placeholder="Your email"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block mb-1 text-sm font-medium text-primary">
						Your password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleChange}
						className="text-sm rounded-lg   block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary "
						placeholder="Your password"
						required
					/>
				</div>
				<div className="text-center">
				<Link href="/forgotpassword">
					<button className="text-center max-w-2xl text-md text-blue-800 font-medium lg:mx-auto">
						Forgot your password?
					</button>
				</Link>
				</div>
				<div className="mt-6">
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Sign in
					</button>
				</div>
				<div className="w-full flex justify-center align-middle mt-2">
					<h3 className="text-blue-800 font-medium">or</h3>
				</div>
				<div className="mt-2">
					<button
						type="button"
						onClick={signInWithGoogle}
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Sign-in with Google
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
