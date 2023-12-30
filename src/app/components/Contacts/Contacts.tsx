import Container from '../container/Container';
import { SocialFull } from '../social/social';
import styles from './Contacts.module.css';

export function Contacts() {
	const data = {
		title: 'Contact Us',
	};
	return (
		<section className={styles.Contacts}>
			<Container className={styles.container}>
				<h2 className={(styles.title, 'title-gradient')}>{data.title}</h2>
				<SocialFull className={styles.social} />
			</Container>
		</section>
	);
}
