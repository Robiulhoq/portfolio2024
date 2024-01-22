import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import SocialMedia from './components/SocialMedia'
import Navbar from './components/Navbar'

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
    <html className='md:mx-10 lg:mx-[7rem] sm:mx-12 mx-6' lang="en">
      <head>

      </head>
      <body className={poppins.className}>
        <SocialMedia />
        <Navbar />
        {children}
      </body>

    </html>
  )
}
