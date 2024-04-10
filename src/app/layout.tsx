import { Metadata } from 'next';
export const metadata: Metadata = {
  title: {
    default: 'RCI Mental Health',
    template: '%s | RCI Mental Health',
  },
  description: 'Find easy and affordable access to mental heatlhcare through Rochester Community Initiative.',
}

import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

import './global.css';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <link rel="icon" href="/assets/favicon.ico" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
