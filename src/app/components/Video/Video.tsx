import { cn } from '@/app/libs/utils';
import bg from '@images/general/video/video-bg.png';
import videoPlaceholder from '@images/general/video/video-placeholder.png';
import Image from 'next/image';
import Container from '../container/Container';
import styles from './Video.module.css';

// console.log(videoPlaceholder);

export function Video() {
	return (
		<div className={styles.video}>
			<Container className={styles.container}>
				<div className={cn(styles.videoContainer)}>
					<Image className={cn(styles.embed)} src={videoPlaceholder} alt="video" />
					{/* <div className={cn(styles.embed)}></div> */}
				</div>
			</Container>
			<Image className={cn(styles.bg)} src={bg} alt="bg" />
		</div>
	);
}
