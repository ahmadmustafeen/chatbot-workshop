import { iAnswer } from 'constants/interfaces';

export const Answer = (props: iAnswer) => {
  return (
    <div
      className='my-2 mr-auto max-w-max 
    
 rounded-br-2xl rounded-tr-2xl
    rounded-tl-2xl border  border-primary py-3 px-3 text-white '
    >
      {props.content}
    </div>
  );
};
