import Image from 'next/image'
import LogoLaskar from '../public/logo-laskar.png'
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../pages/_app';
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
    const {themeLaskar} = useContext(ThemeContext);
    const {isDark} = useContext(ThemeContext).themeLaskar;
    const {valueTheme} = useContext(ThemeContext).themeLaskar;
    const {setThemeLaskar} = useContext(ThemeContext);

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         changeDarkMode(isDark);
    //     },2000)
    // },[])

    const changeDarkMode = () => {
        setThemeLaskar({...themeLaskar,"isDark":!isDark});
    }

    return (  
        <header className={`bg-white transition-all duration-1000 w-full fixed left-0 top-0 shadow-custom
        ${isDark ? valueTheme.backgroundDark : valueTheme.backgroundWhite}`}>
            <div className="w-full h-20 px-5 lg:px-10 flex justify-between items-center">
                <Image src={LogoLaskar} alt="Logo Laskar 2021" height={50} width={100} />
                <DarkModeToggle
                    onChange={changeDarkMode}
                    checked={isDark}
                    speed={1}
                />
            </div>
        </header>
    );
}
 
export default Navbar;