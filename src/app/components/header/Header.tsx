import { cn } from '@/app/libs/utils';
import Link from 'next/link';
import Container from '../container/Container';
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
		<header className={cn(s.header, 'fixed left-0 top-0 z-50 w-full transition-colors', {})}>
			<Container className={cn(s.container, 'py-2.5 lg:py-5', {})}>
				<Logo className={cn(s.logo, '', {})} href="/"></Logo>

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
