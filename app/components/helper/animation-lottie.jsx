"use client"

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Lottie
        animationData={animationPath}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AnimationLottie;