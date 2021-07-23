import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

const Footer = () => {
    const {isDark} = useContext(ThemeContext).themeLaskar;
    const {valueTheme} = useContext(ThemeContext).themeLaskar;

    return (  
        <footer className={`w-full transition duration-1000 lg:fixed lg:left-0 lg:bottom-0 
        text-white h-8 flex items-center justify-center shadow text-xs
        ${isDark ? valueTheme.colorLaskar2 : valueTheme.colorLaskar1}`}>
            Copyright &copy; by LASKAR 2021. All Rights Reserved
        </footer>
    );
}
 
export default Footer;