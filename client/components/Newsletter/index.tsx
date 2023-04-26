import ButtonPrimary from '@components/Button/ButtonPrimary';
import HeadText from '@components/HeadText';
import SubHeading from '@components/SubHeading';
import React from 'react';

const Newsletter = () => {
  return (
    <div className="px-0 py-8 sm:px-16 border border-solid border-golden bg-black">
      <div className="text-center">
        <SubHeading title="Newsletter" imageClass="py-0 mx-auto"/>
        <HeadText text="Subscribe To Our Newsletter" />
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="flex-center flex-col lg:flex-row mt-12 w-full">
        <input
          type="email"
          className="w-full lg:w-[620px] border border-solid border-golden rounded-md font-base text-white mr-8 py-3 px-4 bg-black 2xl:text-[32px] mb-8 lg:mb-0"
          placeholder="Enter your email address"
        />
        <ButtonPrimary text="Subscribe" className="w-max" />
      </div>
    </div>
  );
};

export default Newsletter;
