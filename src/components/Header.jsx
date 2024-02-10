import Button from './Button'
import { useContext } from 'react'
import { ApplicationContext } from '../context/ApplicationContextProvider'
import useHeader from './useHeader'

function Header() {
  const {isLoggedIn, updateLogin} = useContext(ApplicationContext)
  useHeader();
  return (
    <header style={{display: 'flex', justifyContent: 'space-between'}}>
        <a href='/'>LOGO</a>
        <nav>
          <Button position="Gateway" isLoggedIn={isLoggedIn} handleClick={updateLogin}/>
        </nav>
    </header>
  )
}

export default Header
