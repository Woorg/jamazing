import { cn } from '@/app/libs/utils';
import Link from 'next/link';
import { discordIcon, discordIconSecond } from '../icons/discordIcon';
import { emailIcon, emailIconSecond } from '../icons/emailcon';
import { fbIcon, fbIconSecond } from '../icons/fbIcon';
import { tgIcon, tgIconSecond } from '../icons/tgIcon';
import styles from './social.module.css';

export function Social({ className }: any) {
	const data = [
		{
			link: 'https://t.me/test',
			text: 'Telegram',
			icon: tgIcon,
		},
		{
			link: '#',
			text: 'Discord',

			icon: discordIcon,
		},
		{
			link: '#',
			text: 'Facebook',

			icon: fbIcon,
		},
		{
			link: 'mail@mail.mail',
			text: 'Email',

			icon: emailIcon,
		},
	];

	return (
		<ul className={cn(styles.social, className, 'social')}>
			{data?.map((item, index) => (
				<li key={`${index}`} className={styles.item}>
					<Link className={styles.link} href={item.link}>
						<item.icon />
					</Link>
				</li>
			))}
		</ul>
	);
}

export function SocialFull({ className }: any) {
	const data = [
		{
			link: 'https://t.me/test',
			text: 'Telegram',
			icon: tgIconSecond,
		},
		{
			link: '#',
			text: 'Discord',

			icon: discordIconSecond,
		},
		{
			link: '#',
			text: 'Facebook',

			icon: fbIconSecond,
		},
		{
			link: 'mail@mail.mail',
			text: 'Mail',

			icon: emailIconSecond,
		},
	];

	return (
		<ul className={cn(styles.social, styles.socialFull, className)}>
			{data?.map((item, index) => (
				<li key={`${index}`} className={styles.item}>
					<Link className={styles.linkFull} href={item.link}>
						<item.icon />
						<span className={styles.linkText}>{item.text}</span>
					</Link>
				</li>
			))}
		</ul>
	);
}
