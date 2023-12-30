'use client';

import { cn } from '@/app/libs/utils';

// import { usePathname } from 'next/navigation';

const MainLayout = ({ className, children }: any) => {
	return <main className={cn(className, 'main flex-grow overflow-hidden')}>{children}</main>;
};

export default MainLayout;
