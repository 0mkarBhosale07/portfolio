import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Portfolio - Omkar Bhosale',
  description: 'Portfolio webiste of Omkar Bhosale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
