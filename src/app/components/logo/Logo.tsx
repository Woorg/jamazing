'use client'

import Link from 'next/link';
import S from './Logo.module.css';
import { cn } from '@/app/libs/utils';
import { usePathname } from 'next/navigation';
import { LogoIcon, LogoSecondIcon} from '../icons/logoIcon';
export const Logo = ({ className, href } : any) => {
	const pathName = usePathname();
	// console.log(logoIcon);
	
	
	return (
			pathName !== '/' ? (
			<Link className={cn(className)} href={'/'}>
				<LogoIcon/>
			</Link>
			) : (
				<LogoIcon/>
			)
	);
};

export const LogoSecond = ({ className, href } : any) => {
	const pathName = usePathname();
	// console.log(logoIcon);
	
	
	return (
			pathName !== '/' ? (
			<Link className={cn(className)} href={'/'}>
				<LogoSecondIcon/>
			</Link>
			) : (
				<LogoSecondIcon/>
			)
	);
};