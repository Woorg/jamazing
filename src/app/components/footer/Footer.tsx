'use client';
import { cn } from '@/app/libs/utils';
import Container from '../container/Container';
import {LogoSecond} from '../logo/Logo';
import s from './Footer.module.css';

const Footer = () => {
	const data = {
	};

	return (
		<footer className={cn(s.footer)}>
			<Container className={cn(s.container)}>
				<LogoSecond className={cn(s.logo, '')}>
				</LogoSecond>

			</Container>
		</footer>
	);
};

export default Footer;
