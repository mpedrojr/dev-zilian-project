import { useState } from "react";
import Link from "next/link";
import { forgotPasswordFeature } from "../../utils/firebase.utils";

const defaultFormFields = {
	email: "",
};

const PasswordRecovery = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email } = formFields;

	const [errorMessage, setErrorMessage] = useState("");
	// const [message, setMessage] = useState("");

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// forgotPasswordFeature(email);

		try {
			await forgotPasswordFeature(email);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/user-not-found":
					setErrorMessage("No user associated with this email");
					break;
				default:
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
					Forgot Password
				</p>
				<Link href="/signin">
					<button className="mt-4 max-w-2xl text-md text-blue-800 font-medium lg:mx-auto">
						Sign In?
					</button>
				</Link>
			</div>

			<div className="text-center">
				{errorMessage && (
					<p className="error text-red-800 font-medium">{errorMessage}</p>
				)}
			</div>
			{/* <div className="text-center">
				{message && (
					<p className="success text-red-800 font-medium">{message}</p>
				)}
			</div> */}

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

export default PasswordRecovery;
