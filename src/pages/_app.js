import '@/styles/globals.css'
import Navbar from 'components/Navbar'

export default function App ({ Component, pageProps }) {
  console.log("pageProps",pageProps)
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
