import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase.utils";

const defaultFormFields = {
	displayName: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, message } = formFields;
	const [confirmation, setConfirmation] = useState("");

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const docRef = await addDoc(collection(db, "contact"), {
			displayName: displayName,
			email: email,
			message: message,
		});
		resetFormFields();
		setConfirmation("Form submitted successfully.");
		console.log("Document written with ID: ", docRef.id);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="py-12 my-12 bg-white">
			<div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center mb-12">
					<p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-primary sm:text-3xl">
						Contact Us
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
						We will reach out to you soon.
					</p>
				</div>
				<div className="text-center">
					{confirmation && (
						<p className="success text-red-800 font-medium">{confirmation}</p>
					)}
				</div>

				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<label className="block mb-2 text-base font-medium text-primary">
							Name*
						</label>
						<input
							type="name"
							id="name"
							name="displayName"
							value={displayName}
							onChange={handleChange}
							className="text-base rounded-lg block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary placeholder-primary"
							placeholder="Enter your name here"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-base font-medium text-primary">
							Email*
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={handleChange}
							className="text-base rounded-lg  block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary"
							placeholder="name@flowbite.com"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-base font-medium text-primary">
							Message*
						</label>
						<textarea
							type="message"
							id="message"
							name="message"
							value={message}
							onChange={handleChange}
							className="text-base rounded-lg h-44  block w-full p-2.5 bg-gray-50 border border-gray-600 text-primary  placeholder-primary "
							placeholder="Leave your message"
							required
						/>
					</div>
					<div className="flex items-center justify-center mb-6">
						<div className="flex items-center justify-center h-5 mt-6">
							<button
								type="submit"
								className="text-white bg-primary hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
