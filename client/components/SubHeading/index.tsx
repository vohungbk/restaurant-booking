import Image from 'next/image';
import React from 'react';
import { images } from 'shared/constants';

type Props = {
  title: string;
  imageClass?: string;
};

const SubHeading = ({ title, imageClass }: Props) => {
  return (
    <div className="mb-4">
      <p className="p__cormorant">{title}</p>
      <div className={`relative w-[45px] 2xl:w-[80px] h-[10px] ${imageClass}`}>
        <Image src={images.spoon} alt="spoon_image" fill />
      </div>
    </div>
  );
};

export default SubHeading;
