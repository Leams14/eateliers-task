import React from 'react';
import Menu from "../Menu/Menu";
import MediaIcons from '../MediaIcons/MediaIcons';
import logo from "../../images/logo_as.png";



const MainBar = () => {

  return (
  <>  
   
    <div className="bg-[#daae72] p-4 flex justify-between items-center z-10">
    
      <Menu className="z-10" />
      
      <MediaIcons className="z-10" />

      <a href="https://agnieszkaswiatly.pl/">
        <img 
            src={logo} 
            alt="AS Logo" 
            className="h-[100px] rounded-full z-10" 
        />
      </a>
      </div>
    
    </>
  );
};

export default MainBar;