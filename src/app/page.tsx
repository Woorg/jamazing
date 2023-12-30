import Image from 'next/image';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { First } from './components/First';
import MainLayout from './components/mainLayout/MainLayout';
import { More } from './components/More';
import { Video } from './components/Video';

export default function Home() {
	return (
		<MainLayout className="">
			<First />
			<About />
			<Video />
			<More />
			<Contacts />
		</MainLayout>
	);
}
