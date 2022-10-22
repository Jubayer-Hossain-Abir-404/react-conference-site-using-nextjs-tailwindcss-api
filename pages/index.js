import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <>
      <Head>
        <title>React Home</title>
        <meta name="description" content="Conference Page" />
        <meta name="keywords" content="react, conference" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  ); 
}
