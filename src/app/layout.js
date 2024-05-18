import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sanjay's Portfolio",
  description: 'Portfolio page of Sanjay M',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
