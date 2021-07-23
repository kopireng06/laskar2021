import { useContext } from 'react';
import { ThemeContext } from '../pages/_app';

const Laskar2021 = () => {
  const {isDark} = useContext(ThemeContext).themeLaskar;
  const {valueTheme} = useContext(ThemeContext).themeLaskar;

  return ( 
      <div className="w-full lg:w-1/2 pr-20">
        <h1 className={`text-7xl transition-all duration-1000 font-bold ${isDark ? valueTheme.textLaskar2 : valueTheme.textLaskar1}`}>LASKAR 2021</h1>
        <div className="w-full flex flex-col my-1">
          <h3 className={`transition-all duration-1000 font-semibold ${isDark ? valueTheme.textLaskar2 : valueTheme.textLaskar1}`}>#RangerKebaikan</h3>
          <h3 className={`transition-all duration-1000 font-semibold ${isDark ? valueTheme.textLaskar2 : valueTheme.textLaskar1}`}>#ArsitekPeradaban</h3>
          <p className={`transition-all duration-1000 max-w-lg italic mt-4 text-xs ${isDark ? valueTheme.textLaskar2 : valueTheme.textLaskar1}`}>&quot;Perjuangan itu dirintis 
          oleh orang cerdas, diperjuangkan oleh orang ikhlas, dan dimenangkan oleh orang pemberani.&quot;
          </p>
          <p className={`transition-all duration-1000 italic text-xs my-2 ${isDark ? valueTheme.textLaskar2 : valueTheme.textLaskar1}`}>~ ust edgar hamas ~</p>
        </div>
      </div>
    );
}
 
export default Laskar2021;