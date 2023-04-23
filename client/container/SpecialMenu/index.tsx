import ButtonPrimary from '@components/Button/ButtonPrimary';
import MenuItem from '@components/MenuItem';
import SubHeading from '@components/SubHeading';
import Image from 'next/image';
import React from 'react';
import { data, images } from 'shared/constants';

const SpecialMenu = () => {
  return (
    <div className="section-padding bg-black flex-center flex-col">
      <div className="text-center mb-8">
        <SubHeading
          title="Menu that fits you palatte"
          imageClass="my-0 mx-auto"
        />
        <h1 className="text-golden font-semibold leading-[70px] sm:leading-[130%] text-center capitalize font-base text-[45px] sm:text-[64px]">
          Today’s Special
        </h1>
      </div>
      <div className="my-8 flex items-start justify-center flex-col lg:flex-row w-full ">
        <div className="flex-center flex-1 w-full flex-col">
          <p className="font-base font-semibold text-[45px] leading-[130%] text-center capitalize text-white">
            Wine & Beer
          </p>
          <div className="flex flex-col my-8 w-full">
            {data.wines.map((item, index) => (
              <MenuItem
                title={item.title}
                price={item.price}
                tags={item.tags}
                key={index}
              />
            ))}
          </div>
        </div>
        <div
          className="w-full lg:w-[410px] 2xl:w-[650px] h-auto 2xl:h-[920px] my-12 lg:my-0 mx-0 sm:mx-8"
          style={{ position: 'unset' }}
        >
          <Image
            src={images.menu}
            alt=""
            fill
            className="!relative object-contain"
          />
        </div>
        <div className="flex-center flex-1 w-full flex-col">
          <p className="font-base font-semibold text-[45px] leading-[130%] text-center tracking-[0.04em] capitalize text-white">
            Cocktails
          </p>
          <div className="flex flex-col my-8 w-full">
            {data.cocktails.map((item, index) => (
              <MenuItem
                title={item.title}
                price={item.price}
                tags={item.tags}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[15px]">
        <ButtonPrimary text="View more" />
      </div>
    </div>
  );
};

export default SpecialMenu;
