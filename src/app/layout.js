import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
const fira_code = Fira_Code({ subsets: ['latin'] })


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
        {children}
        <footer className="text-center mt-20 mb-5">
        <h1>Designed and Developed by</h1>
        <p className="text-[#64FFDA] mt-2">
          <span className={fira_code.className}>Omkar Bhosale</span>
        </p>
        <p className="text-[#64FFDA] mt-1 text-xs">
          <span className={fira_code.className}>v2.0.1</span>
        </p>
      </footer>
      </body>
        
    </html>
  )
}
