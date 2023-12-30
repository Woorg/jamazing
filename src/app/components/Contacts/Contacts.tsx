import bg from '@images/general/contacts/contacts-bg.png';
import Image from 'next/image';
import Container from '../container/Container';
import { SocialFull } from '../social/social';
import styles from './Contacts.module.css';

// console.log(bg);

export function Contacts() {
	const data = {
		title: 'Contact Us',
	};
	return (
		<section className={styles.contacts}>
			<Container className={styles.container}>
				<h2 className={(styles.title, 'title-gradient')}>{data.title}</h2>
				<SocialFull className={styles.social} />
			</Container>
			<Image className={styles.bg} src={bg} alt="bg" />
		</section>
	);
}
