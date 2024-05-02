import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import APIComponent from './components/APIComponent/APIComponent.jsx';
import MainBar from './components/MainBar/MainBar';
import bride from './images/Webp.net-resizeimage.jpg';


function App() {
  

  return (
    <>  
        <MainBar />
        
        <section className="relative">
        
          <img src={bride} alt="bride" className="absoulute inset-0 h-full w-full opacity-45 z-0"/>
            
          <h1 className= "absolute text-white z-10 top-[150px] left-[65px] font-extrabold text-[100px] font-caveat">
            Lorem Ipsum
          </h1>

          <p className="absolute text-white z-10 top-[320px] left-[71px] font-light text-[20px] flex text-wrap italic leading-snug max-w-[400px] overflow-hidden font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          
          <div id ="collection" className="flex flex-wrap justify-between gap-4 mt-4 absolute top-[1080px] left-1/2 transform -translate-x-1/2">
              <APIComponent />
          </div>
        
          <button className="bg-[#daae72] border border-very-thin text-white italic py-2 px-4 rounded-lg absolute top-[550px] left-[71px] ease-in duration-150">
            <a href="#collection" className="font-caveat text-[25px]">
              See the Collection
            </a>
          </button>
      </section>
      
    </>
  );
}

export default App;


