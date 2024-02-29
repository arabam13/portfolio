import Header from '@/components/Header';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "ARABA Portfolio",
    description: "Mohammed ARABA's portfolio",
  };

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
      >
        <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
          <Header />
          <div className='flex-grow mt-20'>{children}</div>
          {/* <Footer /> */}
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}