import '../../public/assets/styles/style.css';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { cn } from './libs/utils';

const mulish = Mulish({
	subsets: ['cyrillic'],
	display: 'swap',
	preload: true,
	variable: '--mulish',
});

export const metadata: Metadata = {
	title: '',
	description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				// id="top"
				className={cn(mulish.variable, 'flex min-h-screen flex-col pt-[276px] lg:pt-64')}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
