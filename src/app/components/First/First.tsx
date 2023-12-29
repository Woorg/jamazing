import firstImgDesktop from '@images/general/first/first-img.png';
import Image from 'next/image';
import Container from '../container/Container';
import { BgTopIcon } from '../icons/bgTopIcon';
import styles from './First.module.css';

// console.log(firstImgDesktop);

export function First() {
	return (
		<div className={styles.first}>
			<figure className={styles.image}>
				<Image className={styles.image} alt="image" src={firstImgDesktop} />
			</figure>
			{/* <BgTopIcon className={styles.bg} /> */}
			{/* <Container className={styles.container}></Container> */}
		</div>
	);
}
