import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faArrowLeftLong  } from "@fortawesome/free-solid-svg-icons";


const UserCard = ({ user }) => {
  const { id, name, price, currency, media } = user;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isBuy, setIsBuy] = useState(false);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex + media.length - 1) % media.length);
  };

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    window.open(media[index], '_blank'); // Open image in new tab
  };

  const handleBuyClick = () => {
    setIsBuy(!isBuy);
  };

  

  const nextIcon = <FontAwesomeIcon icon={faArrowRightLong} className="mt-2 px-4 border-none bg-black text-white font-bold rounded-[8px] cursor-pointer" />
  const previousIcon = <FontAwesomeIcon icon={faArrowLeftLong} className=" mt-2 px-4 border-none bg-black text-white font-bold rounded-[8px] cursor-pointer" />

  return (
    <div className="relative bg-[rgb(233,162,140)] w-1/4 rounded-[8px] flex flex-col items-center gap-2 py-3 z-10" key={id}>
      <h2 className="text-black font-caveat font-bold text-[28px]">{name}</h2>

      <div className="flex justify-center items-center gap-2 pb-2">
        <img
          src={media[selectedIndex]}
          alt={`${selectedIndex + 1}`}
          className="w-[220px] h-[220px] object-cover cursor-pointer rounded-lg"
          onClick={() => handleImageClick(selectedIndex)}
        />
      </div>
      
      <p className="text-black font-poppins py-[2px] px-1 border-none bg-white rounded-md">{price} {currency}</p>

      <div className="flex justify-center items-center gap-2 pt-2">
        
        <button onClick={handlePrev}>
          {previousIcon}
        </button>
        
        <button onClick={handleBuyClick} className="py-2 px-4 border-none bg-black text-white font-bold rounded-[8px] cursor-pointer hover:animate-pulse hover:bg-slate-600">
          {isBuy ? "Already in the basket" : "Buy"}
        </button>
        
        <button onClick={handleNext}>
          {nextIcon}
        </button>
      
      </div>
    
    </div>
  );
};

export default UserCard;