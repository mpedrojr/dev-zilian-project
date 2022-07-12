import Head from 'next/head';
import HeroHome from '../components/homeComponents/HeroHome';
import Features from '../components/homeComponents/Features';
import ContactForm from '../components/forms/ContactForm';

export default function Home() {
	return (
		<div>
			<Head>
				<title>DevZilian</title>
			</Head>

			<HeroHome />
			<Features />
			<ContactForm />
		</div>
	);
}
