import { Roboto } from 'next/font/google';

import { AppConfig } from 'src/config/AppConfig';

import '../src/styles/global.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={AppConfig.locale}>
      <body className={`${roboto.variable} font-sans`}>
        <div className='flex min-h-screen flex-col justify-between'>
          <div>
            <div className='h-full'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
