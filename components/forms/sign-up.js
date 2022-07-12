import { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import Link from "next/link";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;
	const [errorMessage, setErrorMessage] = useState("");

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords do not match");
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
			if (error.code === "auth/email-already-in-use") {
				setErrorMessage("Cannot create user! Email already in use.");
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="max-w-md w-full space-y-8 mb-12">
			<div className="text-center mb-12 justify-center">
				<p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-primary sm:text-3xl">
					Create an account
				</p>
				<Link href="/signin">
					<button className="mt-4 max-w-2xl text-md text-blue-800 font-medium lg:mx-auto">
						Already have an account?
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
						Name
					</label>
					<input
						type="text"
						id="displayName"
						name="displayName"
						value={displayName}
						onChange={handleChange}
						className="text-sm rounded-lg block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary placeholder-primary"
						placeholder="Enter your name here"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block mb-1 text-sm font-medium text-primary">
						Email
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
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={handleChange}
						className="text-sm rounded-lg   block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary "
						placeholder="Leave your message"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block mb-1 text-sm font-medium text-primary">
						Confirm password
					</label>
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						value={confirmPassword}
						onChange={handleChange}
						className="text-sm rounded-lg   block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary "
						placeholder="Confirm your password"
						required
					/>
				</div>
				<div className="mt-6">
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
