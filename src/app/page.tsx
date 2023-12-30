import Image from 'next/image';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { First } from './components/First';
import MainLayout from './components/mainLayout/MainLayout';
import { More } from './components/More';

export default function Home() {
	return (
		<MainLayout>
			<First />
			<About />
			<More />
			<Contacts />
		</MainLayout>
	);
}
