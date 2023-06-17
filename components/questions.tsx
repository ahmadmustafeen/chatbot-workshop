import { iQuestion } from 'constants/interfaces';

export const Question = (props: iQuestion) => {
  return (
    <div className='my-2 ml-auto max-w-max rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl bg-primary py-3 px-5 text-right text-white'>
      {props.content}
    </div>
  );
};
