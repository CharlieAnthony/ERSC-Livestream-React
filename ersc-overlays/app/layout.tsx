import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import "./fonts.css";


export const metadata: Metadata = {
	title: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Anta&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="https://typekit.net" />
				<title>rsc.canth.dev</title>
			</head>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
