import { useEffect, useState } from "react";
import Keycloak from 'keycloak-js';

const client = new Keycloak(
  {
    url: 'https://keycloak.chillo.tech',
    clientId: 'front-gestionaire',
    realm: 'master'
  }
)

function useHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    client.init({
      onLoad: 'login-required'
    }).then((res) => {
      setIsLoggedIn(true);
      console.log('====================================');
      console.log({client, res});
      console.log('====================================');
    })
  },[])

  return [isLoggedIn, client]
}

export default useHeader;