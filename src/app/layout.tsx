import type { Metadata } from 'next';
import './globals.css';
import { openSansFont } from '@/components/utils/font';

export const metadata: Metadata = {
  title: 'BiSTS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSansFont.className}>
      <body>{children}</body>
    </html>
  );
}
