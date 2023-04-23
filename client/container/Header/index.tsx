import React from 'react';

import AppWrapper from '@components/Wrapper/AppWrapper';
import SubHeading from '@components/SubHeading';
import WrapperInfo from '@components/Wrapper/WrapperInfo';
import ButtonPrimary from '@components/Button/ButtonPrimary';
import Image from 'next/image';
import { images } from 'shared/constants';

const Header = () => {
  return (
    <AppWrapper className="bg-black">
      <WrapperInfo>
        <SubHeading title="Chase the new Flavour" />
        <h1 className="text-golden capitalize font-base font-bold lg:leading-[130%] text-[50px] leading-[70px] sm:leading-[87px] sm:text-[70px] lg:text-[90px]">
          The key to Fine dining
        </h1>
        <p className="p__opensans my-8">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <ButtonPrimary text="Explore Menu" />
      </WrapperInfo>
      <div
        className="w-full flex-1 flex-center lg:ml-8 mt-20 lg:mt-0"
        style={{ position: 'unset' }}
      >
        <Image
          src={images.welcome}
          fill
          alt=""
          className="!w-full lg:!w-[80%] !relative"
        />
      </div>
    </AppWrapper>
  );
};

export default Header;
