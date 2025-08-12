import { DM_Sans, Dancing_Script } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/materialdesignicons.min.css";

const dm_sans = DM_Sans({
   subsets: ["latin"],
   variable: '--font-dm-sans',
  });

  const dancing_script = Dancing_Script({
    subsets: ["latin"],
    variable: '--font-dancing_script',
   });

export const metadata = {
    title: "S7 Travels",
    description: "We are S7 Travels offering the best travel services in Sri Lanka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth" dir="ltr">
      <body className={`${dm_sans.variable} ${dancing_script.variable}  bg-white dark:bg-slate-900`}>{children}</body>
    </html>
  );
}
