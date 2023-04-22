import Head from 'next/head';
import React from 'react';

type Props = {
  title: string;
};

const Metadata = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Metadata;
