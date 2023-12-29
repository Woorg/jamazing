import { cn } from '@/app/libs/utils';
import appStore from '@images/general/about/app-store.svg';
import playMarket from '@images/general/about/google-play.png';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../container/Container';
import styles from './About.module.css';

export function About() {
	const data = {
		text: "Jamazing puts a playful music studio at your fingertips. Lead your pocket band effortlessly, guiding through moods from 'Dreamy' to 'Energy' with just a tap.",
		note: 'currently available only in Philippines',
		markets: [
			{
				link: 'https://play.google.com/store',
				image: playMarket,
				alt: 'play market',
			},
			{
				link: 'https://www.apple.com/app-store/',
				image: appStore,
				alt: 'app store',
			},
		],
		button: {
			link: '#join',
			text: 'Join Waitlist',
		},
	};

	return (
		<section className={styles.about}>
			<Container className={styles.container}>
				<div className={cn(styles.cols)}>
					<div className={cn(styles.col)}>
						<h2 className={cn(styles.title, 'title title_h2')}>
							<span className="text-orange">M</span>
							<span className="text-pink">o</span>
							<span className="text-purple">o</span>
							<span className="text-blue">d</span>
							ify Your Music
						</h2>
						{data.text && <p className={cn(styles.text, 'text')}>{data.text}</p>}
					</div>
					<div className={cn(styles.col)}>
						{data.note && <span className={cn(styles.note)}>{data.note}</span>}

						<ul className={cn(styles.markets, 'markets')}>
							{data.markets.map((item, index) => (
								<li key={`__${index}__`} className={cn(styles.market, 'market')}>
									<Link className={cn(styles.link, 'link')} href={item.link}>
										<Image className={cn(styles.icon)} src={item.image} alt={item.alt} />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{data.button && (
						<Link className={cn(styles.button, 'btn')} href={data.button.link}>
							{data.button.text}
						</Link>
					)}
				</div>
			</Container>
		</section>
	);
}
