import ButtonPrimary from '@components/Button/ButtonPrimary';
import Image from 'next/image';
import React from 'react';
import { images } from 'shared/constants';

const About = () => {
  return (
    <div className="section-padding flex-center relative app-bg">
      <div className="absolute inset-0 flex-center">
        <div className="z-0 w-[80%] lg:w-[391px] h-[320px] lg:h-[415px]">
          <Image
            src={images.G}
            alt=""
            fill
            className="!relative object-contain"
          />
        </div>
      </div>

      <div className="flex items-center flex-col lg:flex-row z-10 w-full">
        <div className="flex-1 flex items-end justify-end flex-col text-right">
          <h1 className="font-base font-semibold text-[45px] sm:text-[64px] leading-[130%] capitalize tracking-[0.03em] text-golden">
            About Us
          </h1>
          <div className="w-[45px]" style={{ position: 'unset' }}>
            <Image
              src={images.spoon}
              alt="about_spoon"
              className="!relative object-contain"
              fill
            />
          </div>

          <p className="p__opensans my-8 text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <ButtonPrimary text=" Know More" />
        </div>
        <div className="relative flex-center my-8 mx-16 h-[910px] 2xl:h-[1100px] w-[84px]">
          <Image src={images.knife} alt="" fill />
        </div>
        <div className="flex-1 flex items-start justify-start flex-col text-left">
          <h1 className="font-base font-semibold text-[45px] sm:text-[64px] leading-[130%] capitalize tracking-[0.03em] text-golden">
            Our History
          </h1>
          <div className="w-[45px]" style={{ position: 'unset' }}>
            <Image
              src={images.spoon}
              alt="about_spoon"
              className="!relative object-contain"
              fill
            />
          </div>

          <p className="p__opensans my-8 text-grey">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <ButtonPrimary text=" Know More" />
        </div>
      </div>
    </div>
  );
};

export default About;
