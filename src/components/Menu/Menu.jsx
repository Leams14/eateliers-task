import React from 'react';
import {useState} from 'react';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen); 
    };

    const handleOptionClick = (option) => {
      /*  Test, check in console that is catching the option selected

        console.log('Option selected:', option);
      
        */
    };

    return (
        <div className="relative ml-10">
          
          <button
            onClick={toggleMenu}
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Menu
          </button>
          
          {isOpen && (
            <div className="absolute top-10 right-0 bg-white border border-gray-300 shadow-xl rounded-xl rounded-tr-none z-10">
              <ul>
                <li>
                  <button
                    onClick={() => handleOptionClick('Our story')}
                    className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-tl-xl"
                  >
                    Our story
                  </button>
                </li>
                <li>
                  <button
                    id="collection"
                    onClick={() => handleOptionClick('Collections')}
                    className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Collections
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleOptionClick('Contact')}
                    className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-b-xl"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      );
    };

export default Menu;