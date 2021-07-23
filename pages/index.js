import Head from 'next/head'
import Laskar2021 from '../components/Laskar2021'
import Form from '../components/Form'

export default function Home() {

  return (
    <div className="transition-all duration-1000 lg:container mx-auto">
      <Head>
        <title>LASKAR 2021</title>
        <meta name="description" content="LASKAR 2021" />
        <link rel="icon" href="/logo-laskar.png" />
      </Head>
      <div className="lg:container px-5 lg:px-10 flex flex-col lg:flex-row items-center mx-auto mt-28">
        <Laskar2021/>
        <Form/>
      </div>
    </div>
  )
}
