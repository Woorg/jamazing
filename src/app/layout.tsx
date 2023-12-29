import "../../public/assets/styles/style.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { cn } from "./libs/utils";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const mulish = Mulish({
  subsets: ["cyrillic"],
  display: "swap",
  preload: true,
  variable: "--mulish",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
				// id="top"
				className={cn(
					mulish.variable,
					'flex min-h-screen flex-col',
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
  );
}
