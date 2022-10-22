import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero';



export default function Home() {
  return (
    <>
      <Head>
        <title>React Home</title>
        <meta name="description" content="Conference Page" />
        <meta name="keywords" content="react, conference" />
      </Head>
      <Hero/>
    </>
  ); 
}
