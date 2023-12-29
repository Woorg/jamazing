'use client';

import { cn } from '@/app/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon, LogoSecondIcon } from '../icons/logoIcon';

// import s from './Logo.module.css';

export const Logo = ({ className, href }: any) => {
	const pathName = usePathname();

	return pathName !== '/' ? (
		<Link className={cn(className)} href={'/'}>
			<LogoIcon />
		</Link>
	) : (
		<LogoIcon className={cn(className)} />
	);
};

export const LogoSecond = ({ className, href }: any) => {
	const pathName = usePathname();

	return pathName !== '/' ? (
		<Link className={cn(className)} href={'/'}>
			<LogoSecondIcon />
		</Link>
	) : (
		<LogoSecondIcon className={cn(className)} />
	);
};
