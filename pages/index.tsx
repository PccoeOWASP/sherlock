import { Inter } from '@next/font/google'
import Banner from 'components/Banner'
import Navbar from '@/components/Navbar'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Steps from '@/components/Steps'
import Form from '@/components/Form'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head';

export default function Home() {
  return (

    <>
      <Head>
        <title>Sherlock</title>
      </Head>
      <Navbar />
      <Banner />
      <Steps />
      <Description />
      {/* <Form /> */}
      <Footer />
    </>
  )
}
