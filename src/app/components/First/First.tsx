import { cn } from '@/app/libs/utils';
import firstImgMob from '@images/general/first/first-img-mob.png';
import firstImgDesktop from '@images/general/first/first-img.png';
import Image from 'next/image';
import { Container } from '../container/Container';
import { BgTopIcon } from '../icons/bgTopIcon';
import styles from './First.module.css';

// console.log(firstImgDesktop);

export function First() {
	const data = {
		title: 'Mix and Experiment!',
	};

	return (
		<div className={styles.first}>
			<Container className={cn(styles.container, 'container-full max-w-8xl')}>
				<h1 className={cn(styles.title, 'title')}>{data.title}</h1>
			</Container>
			<figure className={styles.imageWrap}>
				<Image className={styles.image} alt="image" src={firstImgDesktop} loading="lazy" />
				<Image
					className={styles.imageMod}
					alt="image"
					src={firstImgMob}
					loading="lazy"
					width={firstImgMob.width + 33 * 2}
					height={firstImgMob.height}
				/>
			</figure>
		</div>
	);
}
