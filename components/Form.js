import  Image  from 'next/image'
import { ThemeContext } from '../pages/_app';
import { useState , useContext} from 'react'
import { useRouter } from 'next/router'
import Leader from '../public/leader.jpg'

const Form = () => {
    const [inputData,setInputData] = useState();
    const {isDark} = useContext(ThemeContext).themeLaskar;
    const {valueTheme} = useContext(ThemeContext).themeLaskar;
    const router = useRouter();

    const handleChangeInput = (event) =>{
        setInputData(event.target.value);
      }
    
    const handleSubmitForm = (event) => {
        event.preventDefault();
        router.push(inputData);
    }
    
    
    return (  
        <div className="cursor-pointer w-full lg:w-1/2 relative rounded-lg shadow-custom overflow-hidden mt-10 mb-20 h-52 lg:h-80">
            <Image src={Leader} alt="Leader" objectFit="cover"/>
            <div className="w-full h-full transition-all duration-1000 flex flex-col justify-end p-5 lg:p-10 absolute top-0" 
            style={isDark ? {backgroundColor:"rgba(0,0,0,0)"} : {backgroundColor:"rgba(0,0,0,0.6)"}}>
                <p className={`my-2 transition-all duration-1000 text-xs ${isDark ? 'text-black' : 'text-white'}`}>Isi nim kamu dibawah ini ya :)</p>
                <form onSubmit={handleSubmitForm} className="w-full flex">
                    <input onChange={handleChangeInput} placeholder="ex : 081811633001" type="text"
                    className={`w-7/12 transition-all duration-1000 outline-none px-4 rounded-lg shadow h-10 
                    ${isDark ? valueTheme.backgroundDark : valueTheme.backgroundWhite} ${isDark ? 'text-white' : 'text-black'}`} />
                    <button onClick={handleSubmitForm} className={`w-5/12 ml-2 transition-all duration-1000 
                    font-semibold text-xs lg:text-md rounded-lg text-white px-5 ${isDark ? valueTheme.colorLaskar2 : valueTheme.colorLaskar1}`}>LIHAT HASIL</button>
                </form>
            </div>
        </div>
    );
}
 
export default Form;