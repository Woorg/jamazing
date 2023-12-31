import { cn } from '@/app/libs/utils';
import Link from 'next/link';
import { Container } from '../container/Container';
import { Logo } from '../logo/Logo';
import { Social } from '../social';
import s from './Header.module.css';

const Header = () => {
	const data = {
		button: {
			link: '#',
			text: 'Join Waitlist',
		},
	};

	return (
		<header className={cn(s.header, '', {})}>
			<Container className={cn(s.container, 'max-w-8xl container-full', {})}>
				<Logo className={cn(s.logo, 'some')} href="/" />

				<div className={cn(s.links, '')}>
					<Social />
					<Link className={cn(s.button, 'btn')} href={data.button.link}>
						{data.button.text}
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
