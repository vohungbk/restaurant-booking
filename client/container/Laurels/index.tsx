import HeadText from '@components/HeadText';
import SubHeading from '@components/SubHeading';
import WrapperInfo from '@components/Wrapper/WrapperInfo';
import Image from 'next/image';
import React from 'react';
import { data, images } from 'shared/constants';

const Laurels = () => {
  return (
    <div className="section-padding app-bg flex items-center justify-between flex-col lg:flex-row">
      <WrapperInfo>
        <SubHeading title="Awards & recognition" />
        <HeadText text="Our Laurels" />
        <div className="flex items-center justify-start flex-wrap mt-12">
          {data.awards.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex justify-start items-start min-w-[230px] 2xl:min-w-[380px] m-4"
            >
              <div className="" style={{ position: 'unset' }}>
                <Image
                  src={item.imgUrl}
                  alt=""
                  fill
                  className="!relative object-contain"
                />
              </div>
              <div className="flex flex-col ml-4">
                <p className="p__cormorant text-golden">{item.title}</p>
                <p className="p__opensans">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </WrapperInfo>
      <div
        className="flex-1 flex-center w-full my-20 lg:my-0 ml-0 lg:ml-8"
        style={{ position: 'unset' }}
      >
        <Image
          src={images.laurels}
          alt=""
          fill
          className="!relative !w-full lg:!w-[80%]"
        />
      </div>
    </div>
  );
};

export default Laurels;
