import Image  from 'next/image';
import Account from '../public/account.png'
import { useRouter } from 'next/router'
import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

const CardHasilSeleksi = ({post}) => {
    const {isDark} = useContext(ThemeContext).themeLaskar;
    const {valueTheme} = useContext(ThemeContext).themeLaskar;
    const router = useRouter();

    const handleClickGagal = () =>{
        router.push('/');
    }
    return (  
        <div className={`p-5 transition-all duration-1000 w-full lg:w-1/2 
        relative rounded-lg shadow-custom overflow-hidden mt-10 mb-20 ${isDark ? valueTheme.backgroundDark2 : valueTheme.backgroundWhite}`}>
            <div className="w-full flex lg:flex-row flex-col items-center">
                {
                    (()=>{
                        if(post.value[1] === "LULUS"){
                            return(
                                <div className="h-20 w-20 overflow-hidden rounded-full top-0 border-4 border-green-500">
                                    <Image alt="foto peserta" src={Account} objectFit="cover" />
                                </div>
                            )
                        } 
                        else{
                            return(
                                <div className="h-20 w-20 overflow-hidden rounded-full top-0 border-4 border-red-500">
                                    <Image alt="foto peserta" src={Account}  objectFit="cover" />
                                </div>
                            )
                        }
                    })()
                }
                <div className="flex mx-5 flex-col lg:mt-0 mt-4">
                    <h3 className={`font-semibold transition-all duration-1000 lg:text-left text-center text-sm my-1 
                    ${isDark ? 'text-white' : 'text-black'}`}>Nama : {post.value[0]}</h3>
                    <h3 className={`font-semibold transition-all duration-1000 lg:text-left text-center text-sm my-1 
                    ${isDark ? 'text-white' : 'text-black'}`}>NIM : {router.query.nim}</h3>
                </div>
            </div>
            <hr className="my-5" />
            <div className="flex flex-col items-center">   
            {   
                (()=>{
                    if(post.value[1] === "LULUS"){
                        return (
                            <>
                                <p className={`max-w-lg transition-all duration-1000 text-center text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                                    Selamat kamu telah berhasil <span>{post.value[1]}</span> sebagai peserta LASKAR 2021 dengan IPK sebesar <b>{post.value[2]}</b>
                                    , Semoga ilmu kamu berkah, manfaat, dan tentunya dapat diamalkan di kehidupan sehari-hari. Silakan untuk melihat rapot kelulusan kamu dibawah ini
                                </p>
                                <a  href={post.value[3]} rel="noreferrer" target="_blank"
                                 className="text-center w-full bg-green-500 p-3 mt-5 lg:mt-10 rounded text-white font-bold">Lihat Rapot</a>
                            </>
                        )
                    }
                    else{
                        return (
                            <>
                                <p className={`max-w-lg transition-all duration-1000 text-center text-sm ${isDark ? 'text-white' : 'text-black'}`}>
                                    Maaf kamu <span>{post.value[1]}</span> sebagai peserta LASKAR 2021, Jangan pernah menyerah dengan
                                    keadaan kawan, teruslah melangkah maju karena kegagalan kamu hari ini adalah awal dari keberhasilanmu selanjutnya
                                </p>
                                <button onClick={handleClickGagal} className="w-full bg-red-500 p-3 mt-5 lg:mt-100 rounded text-white font-bold">Kembali</button>
                            </>
                        )
                    }
                })()
            } 
            </div>
        </div>
    );
}
 
export default CardHasilSeleksi;