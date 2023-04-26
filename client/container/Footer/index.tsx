import FooterOverlay from '@components/FooterOverlay';
import Newsletter from '@components/Newsletter';
import Image from 'next/image';
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from 'shared/constants';

const Footer = () => {
  return (
    <div className="section-padding w-full relative z-10 flex items-center justify-start flex-col bg-black">
      <FooterOverlay />
      <Newsletter />
      <div className="w-full flex justify-between items-center flex-col lg:flex-row lg:items-start mt-20 px-0 lg:px-8">
        <div className="flex-1 text-center my-8 lg:my-4 lg:m-4 w-full lg:w-auto">
          <h1 className="font-base text-white capitalize text-[32px] mb-4">
            Contact Us
          </h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="flex-1 text-center my-8 lg:my-4 lg:m-4 w-full lg:w-auto">
          <div className="font-base font-bold text-[45px] sm:text-[64px] text-center uppercase text-golden">
            Confetti
          </div>
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <div className="mt-4 w-[45px] mx-auto" style={{ position: 'unset' }}>
            <Image src={images.spoon} alt="" className="!relative" fill />
          </div>
          <div className="mt-2 flex-center">
            <FiFacebook className="text-white m-2 text-[24px] cursor-pointer hover:text-golden" />
            <FiTwitter className="text-white m-2 text-[24px] cursor-pointer hover:text-golden" />
            <FiInstagram className="text-white m-2 text-[24px] cursor-pointer hover:text-golden" />
          </div>
        </div>

        <div className="flex-1 text-center my-8 lg:my-4 lg:m-4 w-full lg:w-auto">
          <h1 className="font-base text-white capitalize text-[32px] mb-4">
            Working Hours
          </h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans mb-4">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans mb-4">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="mt-12">
        <p className="p__opensans">2023 Confetti. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
