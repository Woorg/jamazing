import { cn } from "@/app/libs/utils";

const Container = ({ className, children } : any) => {
	return <div className={cn('container ', className)}>{children}</div>;
};

export default Container;
