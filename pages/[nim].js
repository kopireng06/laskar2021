import { useRouter } from 'next/router'
import { Link } from 'next/link'
import Image from 'next/image'
import LogoLaskar from '../public/logo-laskar.png'
import Nopal from '../public/nopal.png'

const HasilSeleksi = ({post}) => {
    const router = useRouter();

    const handleClickGagal = () =>{
        router.push('/');
    }

    return (
        <div className="lg:container mx-auto">
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
            <div className="p-5 bg-white w-full lg:w-1/2 relative rounded-lg shadow-custom overflow-hidden mt-10 mb-20 h-80">
                <div className="w-full flex items-center">
                    {
                        (()=>{
                            if(post.value[1] === "LULUS"){
                                return(
                                    <div className="h-12 lg:h-20 w-12 lg:w-20 overflow-hidden rounded-full top-0 border-4 border-green-500">
                                        <Image alt="foto peserta" src={Nopal} objectFit="cover" />
                                    </div>
                                )
                            } 
                            else{
                                return(
                                    <div className="h-12 lg:h-20 w-12 lg:w-20 overflow-hidden rounded-full top-0 border-4 border-red-500">
                                        <Image alt="foto peserta" src={Nopal}  objectFit="cover" />
                                    </div>
                                )
                            }
                        })()
                    }
                    <div className="flex mx-5 flex-col">
                        <h3 className="font-semibold text-sm my-1">Nama Lengkap : {post.value[0]}</h3>
                        <h3 className="font-semibold text-sm my-1">NIM : {router.query.nim}</h3>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex flex-col items-center">   
                {   
                    (()=>{
                        if(post.value[1] === "LULUS"){
                            return (
                                <>
                                    <p className="max-w-lg text-center text-sm">
                                        Selamat anda telah berhasil <span>{post.value[1]}</span> sebagai peserta LASKAR 2021, Semoga ilmu anda berkah, manfaat,
                                        dan tentunya dapat diamalkan di kehidupan sehari-hari. Silahkan untuk melihat sertifikat kelulusan kamu dibawah ini
                                    </p>
                                    <button className="w-full bg-green-500 p-3 mt-5 lg:mt-10 rounded text-white font-bold">Lihat Sertifikat</button>
                                </>
                            )
                        }
                        else{
                            return (
                                <>
                                    <p className="max-w-lg text-center text-sm">
                                        Maaf kamu <span>{post.value[1]}</span> sebagai peserta LASKAR 2021, Jangan pernah menyerah dengan
                                        keadaan kawan, teruslah melangkah maju karena kegagalan kamu hari ini adalah awal dari kegagalan-kegagalan selanjutnya HEHE
                                    </p>
                                    <button onClick={handleClickGagal} className="w-full bg-red-500 p-3 mt-5 lg:mt-10 rounded text-white font-bold">Kembali</button>
                                </>
                            )
                        }
                    })()
                } 
                </div>
            </div>
            </div>
            <footer className="w-full lg:fixed lg:bottom-0 bg-yellow-400 text-white h-8 flex items-center justify-center shadow text-xs">
                Copyright &copy; by LASKAR 2021. All Rights Reserved
            </footer>
        </div>
    );
}

export async function getStaticPaths() {
    const listNIM = {nim:["081811633001","081811633002"]};
    const paths = listNIM.nim.map((data) => ({
        params: { nim: data },
    }))
  
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const dataKelulusan = {
        "081811633001":["Naufal Ghani Achmani","LULUS"],
        "081811633002":["Achmani Ghani Naufal","TIDAK LULUS"]
    }
    const post = {
        "value":dataKelulusan[params.nim]
    }
    return { props: { post } }
  }
 
export default HasilSeleksi