import ButtonPrimary from '@components/Button/ButtonPrimary';
import HeadText from '@components/HeadText';
import SubHeading from '@components/SubHeading';
import AppWrapper from '@components/Wrapper/AppWrapper';
import WrapperInfo from '@components/Wrapper/WrapperInfo';
import Image from 'next/image';
import React from 'react';
import { images } from 'shared/constants';

const FindUs = () => {
  return (
    <AppWrapper className="app-bg" id="contact">
      <WrapperInfo>
        <SubHeading title="Contact" />
        <HeadText className="mb-12" text="Find Us" />
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: '#DCCA87', margin: '2rem 0' }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <ButtonPrimary className='mt-8' text="Visit Us" />
      </WrapperInfo>
      <div className="flex-1 flex-center w-full ml-8 mt-20 lg:mt-0">
        <div className="w-full lg:w-[80%]" style={{ position: 'unset' }}>
          <Image src={images.findus} alt="" fill className="!relative" />
        </div>
      </div>
    </AppWrapper>
  );
};

export default FindUs;
