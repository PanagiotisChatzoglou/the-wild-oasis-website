import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

//SETTING GOOGLE FONTS
import { Josefin_Sans } from "next/font/google";
// configure the font
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

//To modify the title
//Advanced way to set title
// %s is a placeholder for the title we extract from evry page
// default is a fallback title. To set Icon we put an image in app folder
// name it icon.png
export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | Wild Oasis",
  },
  description: "A beautiful oasis in the wild",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header>
          <Navigation />
          <Logo />
        </Header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
