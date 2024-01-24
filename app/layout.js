import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import SocialMedia from './components/SocialMedia'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'ROBIUL HOQ RAKIB',
  description: '',
}
// const [nav, setNev] = useState(true);
export default function RootLayout({ children }) {
  return (
    <html className={poppins.className} >
      <head>

      </head>
      <body lang="en">
          {children}
      </body>
    </html>
  )
}
