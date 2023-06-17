import React from 'react';
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Image from 'next/image';

import { SocialLinks } from './social-link';

export const SideBar: React.FC = () => {
  return (
    <div className='h-full w-1/4 '>
      <div className='flex w-full items-center justify-center py-10'>
        <div className='h-52 w-52 overflow-hidden rounded-full bg-red-600'>
          <Image
            src={'/ahmad.jpeg'}
            width={400}
            height={400}
            className='h-full w-full'
            alt='Ahmad Mustafeen'
          />
        </div>
      </div>
      <p className='text-center text-3xl italic text-white'>Ahmad Mustafeen</p>
      <p className='text-center text-lg italic text-white'>
        Software Engineer @GeeksOfKolachi
      </p>
      <div className='flex w-full flex-col items-center justify-center py-10'>
        <SocialLinks
          label='Github'
          link='https://www.github.com/ahmadmustafeen'
        >
          <FiGithub className='text-white' />
        </SocialLinks>
        <SocialLinks
          label='LinkedIn'
          link='https://www.linkedin.com/in/ahmadmustafeen'
        >
          <FiLinkedin className='text-white' />
        </SocialLinks>
        <SocialLinks
          label='Facebook'
          link='https://www.facebook.com/ahmad.mustafeen22'
        >
          <FiFacebook className='text-white' />
        </SocialLinks>
        <SocialLinks label='Twitter' link='https://twitter.com/dev_ahmad__'>
          <FiTwitter className='text-white' />
        </SocialLinks>
      </div>
    </div>
  );
};
