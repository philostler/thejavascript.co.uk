import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = Readonly<{
  children: ReactNode;
}>;

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "The JavaScript",
  description: "The JavaScript website.",
};

const layout = ({ children }: Props) => (
  <html lang="en">
    <body
      className={clsx(
        inter.className,
        "bg-gradient-to-br",
        "from-slate-50",
        "dark:from-zinc-950",
        "via-blue-100",
        "dark:via-slate-950",
        "via-30%",
        "to-slate-50",
        "dark:dark:to-zinc-950",
      )}
    >
      {children}
    </body>
  </html>
);

export default layout;
export { metadata };
