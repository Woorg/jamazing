import Link from 'next/link';
import { discordIcon } from '../icons/discordIcon';
import { emailIcon } from '../icons/emailcon';
import { fbIcon } from '../icons/fbIcon';
import { tgIcon } from '../icons/tgIcon';
import styles from './social.module.css';

export function Social() {
	const data = [
		{
			link: '#',
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
		<ul className={styles.social}>
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
