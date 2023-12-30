'use client';

import { cn } from '@/app/libs/utils';
import Link from 'next/link';
import Container from '../container/Container';
import { LogoSecond } from '../logo/Logo';
import s from './Footer.module.css';

const Footer = () => {
	const data = {
		links: [
			{
				link: '/privacy-policy',
				text: 'Privacy Policy',
			},
			{
				link: '/terms-conditions',
				text: 'Terms & Conditions',
			},
		],
	};

	return (
		<footer className={cn(s.footer)}>
			<Container className={cn(s.container)}>
				<ul className={s.links}>
					{data.links.map((item, index) => (
						<li key={`_${index}_`} className={s.item}>
							<Link className={s.link} href={item.link}>
								{item.text}
							</Link>
						</li>
					))}
				</ul>
				<LogoSecond className={cn(s.logo, '')}></LogoSecond>
			</Container>
		</footer>
	);
};

export default Footer;
