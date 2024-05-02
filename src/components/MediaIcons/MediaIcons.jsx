import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";



const MediaIcons = () => {

   const envelope = <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-white mr-4 hover:animate-bounce hover:cursor-pointer" />
   const instagramIcon = <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-white mr-4 hover:animate-bounce hover:cursor-pointer" />
   const facebookIcon = <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-white mr-4 hover:animate-bounce hover:cursor-pointer" />
   const youtubeIcon = <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-white mr-4 hover:animate-bounce hover:cursor-pointer" />
   
   const userIcon = <FontAwesomeIcon icon={faUser} className="w-6 h-6 text-white mr-3" />
   const shoppingBasket = <FontAwesomeIcon icon={faShoppingBasket} className="w-6 h-6 text-white" />


  return (
<> 
    <div className="ml-auto mr-20"> 
        
        {envelope}
        
        <a href="https://www.instagram.com/agnieszkaswiatly/" rel="AgnieszkaSwiatly_Instagram" target="_blank">
          {instagramIcon}
        </a>
        
        <a href="https://www.facebook.com/Atelier.Agnieszka.Swiatly/" rel="AgnieszkaSwiatly_Facebook" target="_blank">
          {facebookIcon}
        </a>
        
        <a href="https://www.youtube.com/channel/UC2zRBglCSzFuJwhFkGFP8Cw" rel="AgnieszkaSwiatly_YouTube" target="_blank" >
          {youtubeIcon}
        </a>  
    
    </div>

    <div className='mr-10'>
        {userIcon}
        {shoppingBasket}
    </div>

</>
  )
}

export default MediaIcons