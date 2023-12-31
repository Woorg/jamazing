import { cn } from '@/app/libs/utils';
import { Container } from '../container/Container';
import styles from './More.module.css';

export function More() {
	const data = {
		title: `From '<span class="text-purple">Mystic</span>' vibes to '<span class="text-orange">Groovy</span>' beats and '<span class="text-darkBlue">Dark</span>' rock riffs, experience an amazing mix of musical styles for every mood.`,
		text: 'Dive into Jamazing and experience music in a new, unleashed way. This app transforms every touch into diverse and incredible soundscapes, offering a dynamic canvas for your audiovisual creativity.',
	};

	return (
		<div className={styles.more}>
			<Container className={cn(styles.container, 'max-w-6xl')}>
				<div className={cn(styles.cols)}>
					<div className={cn(styles.col)}>
						<p
							className={cn(styles.title, 'title title_h3')}
							dangerouslySetInnerHTML={{ __html: data.title }}
						></p>
					</div>
					<div className={cn(styles.col)}>
						<p className={cn(styles.text, 'text')}>{data.text}</p>
					</div>
				</div>
			</Container>
		</div>
	);
}
