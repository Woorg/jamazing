import Image from 'next/image';
import { First } from './components/First';
import MainLayout from './components/mainLayout/MainLayout';
import { About } from './components/About';

export default function Home() {
	return (
		<MainLayout>
			<First />
			<About/>
		</MainLayout>
	);
}
