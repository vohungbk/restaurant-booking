import HeadText from '@components/HeadText';
import SubHeading from '@components/SubHeading';
import AppWrapper from '@components/Wrapper/AppWrapper';
import WrapperInfo from '@components/Wrapper/WrapperInfo';
import Image from 'next/image';
import React from 'react';
import { images } from 'shared/constants';

const Chef = () => {
  return (
    <AppWrapper className="app-bg">
      <div className="flex justify-start items-center flex-1 mx-0 sm:mx-8">
        <div
          className="w-full lg:w-[80%] mb-20 lg:mb-0"
          style={{ position: 'unset' }}
        >
          <Image
            src={images.chef}
            alt=""
            fill
            className="!relative object-contain"
          />
        </div>
      </div>

      <WrapperInfo>
        <SubHeading title="Chef’s Word" />
        <HeadText text="What we believe in" />
        <div className="flex flex-col w-full mt-20">
          <div className="flex items-end justify-start">
            <div
              style={{ position: 'unset' }}
              className="w-[47px] h-10 mr-4 mb-4"
            >
              <Image
                src={images.quote}
                alt=""
                fill
                className="!relative object-contain"
              />
            </div>
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="w-full mt-12">
          <p className="font-base text-[32px] capitalize text-golden">
            Kevin Luo
          </p>
          <p className="p__opensans">Chef & Founder</p>
          <div className="w-[250px] mt-12" style={{ position: 'unset' }}>
            <Image src={images.sign} alt="" fill className="!relative" />
          </div>
        </div>
      </WrapperInfo>
    </AppWrapper>
  );
};

export default Chef;
