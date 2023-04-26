import ButtonPrimary from '@components/Button/ButtonPrimary';
import HeadText from '@components/HeadText';
import SubHeading from '@components/SubHeading';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from 'react-icons/bs';
import { images } from 'shared/constants';

const Gallery = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const { current } = ref;

    if (direction === 'left' && current) {
      current.scrollLeft -= 300;
    }
    if (direction === 'right' && current) {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-black py-16 pl-8 md:pl-16 lg:pl-24">
      <div className="flex flex-col items-start justify-center flex-1 min-w-full sm:min-w-[500px] 2xl:min-w-[1000px] sm:pr-0 lg:pr-8">
        <SubHeading title="Instagram" />
        <HeadText text="Photo Gallery" />
        <p className="p__opensans text-[#AAAAAA] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <ButtonPrimary text="View More" />
      </div>
      <div className="flex flex-1 flex-row max-w-full sm:max-w-[50%] relative my-20 lg:my-0">
        <div
          className="flex flex-row max-w-max overflow-x-scroll scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          ref={ref}
        >
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="relative min-w-[240px] h-[320px] sm:min-w-[301px] sm:h-[447px] 2xl:min-w-[400px] 2xl:h-[574px] mr-8 flex-center group"
              key={`gallery_image-${index + 1}`}
            >
              <div
                style={{ position: 'unset' }}
                className="w-full h-full object-cover opacity-100 transition group-hover:opacity-30"
              >
                <Image
                  src={image}
                  alt="gallery_image"
                  fill
                  className="!relative"
                />
              </div>
              <BsInstagram
                color="#fff"
                className="text-[32px] text-white opacity-0 transition group-hover:opacity-1 cursor-pointer absolute z-10"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center px-4 absolute top-[50%]">
          <BsArrowLeftShort
            className="text-golden hover:text-white bg-black text-[32px] cursor-pointer rounded-[5px]"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="text-golden hover:text-white bg-black text-[32px] cursor-pointer rounded-[5px]"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
