import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menubar from "./components/menubar/menubar";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Collections - is a moodboard where we can gather resources into folders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.className} bg-dull-bg py-2 sm:pl-[60px] pr-2`}>
        <Menubar />
        <div className="rounded-[20px] bg-bright-bg min-h-screen p-10">{children}</div>
      </body>
    </html>
  );
}
