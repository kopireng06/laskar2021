import 'tailwindcss/dist/tailwind.css'
import Layout from '../components/Layout'
import styles from '../styles/globals.css'
import {useEffect, useState} from 'react';
import React from 'react';

export const ThemeContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const theme = {
    "isDark" : false,
    "valueTheme":{
      "backgroundDark" : "bg-gray-900",
      "backgroundDark2" : "bg-gray-800",
      "backgroundWhite": "bg-white",
      "colorLaskar1" : "color-laskar",
      "textLaskar1" : "text-color-laskar",
      "colorLaskar2" : "color-laskar-2",
      "textLaskar2" : "text-color-laskar-2"
    }
  }

  const [themeLaskar,setThemeLaskar] = useState(theme);

  return(
    <ThemeContext.Provider value={{themeLaskar,setThemeLaskar}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>{`
        body {
          transition-property:all;
          transition-duration:1000ms;
          background: ${themeLaskar.isDark ? 'rgb(17, 24, 39);' : 'white'};
        }
      `}</style>
    </ThemeContext.Provider>
  ) 
}

export default MyApp
