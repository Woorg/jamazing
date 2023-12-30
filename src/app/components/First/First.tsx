import { cn } from '@/app/libs/utils';
import firstImgDesktop from '@images/general/first/first-img.png';
import Image from 'next/image';
import Container from '../container/Container';
import { BgTopIcon } from '../icons/bgTopIcon';
import styles from './First.module.css';

// console.log(firstImgDesktop);

export function First() {
	const data = {
		title: 'Mix and Experiment!',
	};

	return (
		<div className={styles.first}>
			<Container className={styles.container}>
				<h1 className={cn(styles.title, 'title')}>{data.title}</h1>
			</Container>
			<figure className={styles.image}>
				<Image className={styles.image} alt="image" src={firstImgDesktop} />
			</figure>
		</div>
	);
}
