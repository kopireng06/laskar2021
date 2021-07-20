import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LogoLaskar from '../public/logo-laskar.png'
import Leader from '../public/leader.jpg'

export default function Home() {
  const [inputData,setInputData] = useState();
  const router = useRouter();

  useEffect(()=>{
    console.log(inputData);
  })
  
  const handleChangeInput = (event) =>{
    setInputData(event.target.value);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    router.push(inputData);
  }

  return (
    <div className="lg:container mx-auto">
      <Head>
        <title>LASKAR 2021</title>
        <meta name="description" content="LASKAR 2021" />
        <link rel="icon" href="/logo-laskar.png" />
      </Head>
      <header className="w-full fixed top-0">
        <div className="lg:container mx-auto h-20 px-5 lg:px-10 bg-white flex items-center shadow">
          <Image src={LogoLaskar} alt="Logo Laskar 2021" height={50} width={100} />
        </div>
      </header>
      <div className="lg:container px-5 lg:px-10 flex flex-col lg:flex-row items-center mx-auto mt-28">
        <div className="w-full lg:w-1/2 pr-20">
          <h1 className="text-7xl text-yellow-400 font-bold">LASKAR 2021</h1>
          <div className="w-full flex flex-col my-1">
            <h3 className="font-semibold text-yellow-400">#RangerKebaikan</h3>
            <h3 className="font-semibold text-yellow-400">#ArsitekPeradaban</h3>
            <p className="text-yellow-400 max-w-lg italic my-3 text-xs">&quot;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolore voluptas quibusdam 
              maxime obcaecati minima magnam accusantium voluptate possimus! Qui quos sunt illo est exercitationem 
              cumque eum, repellat debitis nesciunt&quot;
            </p>
          </div>
        </div>
        <div className="cursor-pointer w-full lg:w-1/2 relative rounded-lg shadow-custom overflow-hidden mt-10 mb-20 h-80">
          <Image src={Leader} alt="Leader" objectFit="cover"/>
          <div className="w-full h-full flex flex-col justify-end p-5 lg:p-10 absolute top-0" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
            <p className="text-white my-2 text-xs">Isi nim kamu dibawah ini ya :)</p>
            <form onSubmit={handleSubmitForm} className="w-full flex">
              <input onChange={handleChangeInput} placeholder="ex : 081811633001" type="text" className="w-7/12 outline-none px-4 transition duration-700 rounded-lg focus:border-yellow-400 border-2 shadow bg-white h-10" />
              <button onClick={handleSubmitForm} className="w-5/12 ml-2 bg-yellow-400 font-semibold text-xs lg:text-md rounded-lg text-white px-5">LIHAT HASIL</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full lg:fixed lg:bottom-0 bg-yellow-400 text-white h-8 flex items-center justify-center shadow text-xs">
        Copyright &copy; by LASKAR 2021. All Rights Reserved
      </footer>
    </div>
  )
}
