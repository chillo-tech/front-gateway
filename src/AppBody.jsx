import { useContext } from 'react'
import { ApplicationContext } from './context/ApplicationContextProvider'
import Button from './components/Button'

function AppBody() {
  const {isLoggedIn, updateLogin} = useContext(ApplicationContext)
  return (
    <div style={{marginBottom: 30}}>
      <Button position="Gateway" isLoggedIn={isLoggedIn} handleClick={updateLogin}/>
    </div>
  )
}

export default AppBody
