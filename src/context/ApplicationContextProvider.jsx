import {useState, createContext} from 'react';
import Header from '../components/Header';

export const ApplicationContext = createContext();


function ApplicationContextProvider({children}) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLogin = () => {
    console.log("toogle" + isLoggedIn);
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <ApplicationContext.Provider value={{isLoggedIn, updateLogin}}>
 <Header />
      {children}
    </ApplicationContext.Provider>
  )

}

export default ApplicationContextProvider;