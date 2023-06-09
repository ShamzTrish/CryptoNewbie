import Providers from '@/components/Providers'
import './globals.css'
import Chat from '@/components/Chatbot/Chat'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@rainbow-me/rainbowkit/styles.css';



export const metadata = {
  title: 'CryptoSupport',
  description: 'Your AI friend for your questions & answers',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` bg-light-background dark:bg-dark-background`}>
        <Providers>
          <NavBar />
          <Chat />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
