import { cn } from '@/app/libs/utils';

export const Container = ({ className, children }: any) => {
	return <div className={cn('container', className)}>{children}</div>;
};
