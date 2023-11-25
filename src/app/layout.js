import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THE ANGSTRONOMERS',
  description: 'Device for in-plane thermal conductivity testing using the Angstrom method',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <NavBar/>
      </div>
      <body className={inter.className}>
        {children}
      </body>
      <Footer/>
    </html>
  )
}
