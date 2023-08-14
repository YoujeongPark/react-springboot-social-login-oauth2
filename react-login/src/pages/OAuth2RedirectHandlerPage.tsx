import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const OAuth2RedirectHandlerPage = () => {
  const navigate = useNavigate();

  const getUrlParameter = (name: string) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  useEffect(() => {   
    (async () => {
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');
        
        if (localStorage.getItem('accessToken')) {
          navigate("/profile");
        }else if(token){
          localStorage.setItem('accessToken', token);
          navigate("/profile");
        }else {
          navigate("/login");
        }
        
      })()
  }, [])

  return <></>
}


export  default OAuth2RedirectHandlerPage;