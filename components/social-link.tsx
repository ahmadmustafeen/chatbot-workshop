import { iSocialLinks } from 'constants/interfaces';

export const SocialLinks = (props: iSocialLinks) => {
  const { children, label, link } = props;
  return (
    <a
      className='my-1 flex w-60 cursor-pointer flex-row items-center justify-center rounded-lg border border-white py-2'
      href={link}
      target='_blank'
      rel='noreferrer'
    >
      {children}
      <p className='mx-2 text-white'>{label}</p>
    </a>
  );
};
