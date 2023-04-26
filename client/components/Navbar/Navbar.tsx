import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const items = ['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'];
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex items-center justify-between bg-black w-full py-4 sm:px-8 px-4">
      <div className="font-base font-bold text-[44px] text-center leading-[130%] tracking-[0.04em] uppercase text-white">
        Confetti
      </div>
      <ul className="hidden lg:flex items-center justify-center flex-1">
        {items?.map((item, index) => (
          <li
            key={index}
            className="text-white mx-4 my-0 hover:text-grey cursor-pointer font-sans leading-[175%] tracking-[0.04em]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex items-center justify-end">
        <a className="my-0 mx-4 text-white font-semibold tracking-wider leading-[28px] capitalize cursor-pointer font-sans transition duration-500 ease-linear hover:border-b hover:border-solid hover:border-b-golden">
          Log in / registration
        </a>
        <div className="w-[1px] h-[30px] bg-grey" />
        <a className="my-0 mx-4 text-white font-semibold tracking-wider leading-[28px] capitalize cursor-pointer font-sans transition duration-500 ease-linear hover:border-b hover:border-solid hover:border-b-golden">
          Book Table
        </a>
      </div>
      <div className="flex lg:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black flex-col z-10 flex items-center justify-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="text-golden cursor-pointer absolute top-5 right-5"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="">
              {items?.map((item, index) => (
                <li
                  key={index}
                  className="m-8 text-golden cursor-pointer font-base text-[32px] text-center hover:text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
