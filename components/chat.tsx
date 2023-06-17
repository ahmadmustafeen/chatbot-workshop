import { FormEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Answer } from 'components/answers';
import { Question } from 'components/questions';
import { messageType } from 'constants/interfaces';
import { ChatCompletionRequestMessageRoleEnum } from 'openai';

export const Chat = () => {
  const [messages, setMessages] = useState<messageType[]>([]);
  const [value, setValue] = useState<string>('');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessages((_messages: messageType[]) => [
      ..._messages,
      {
        role:
          messages.length % 2 === 0
            ? ChatCompletionRequestMessageRoleEnum.User
            : ChatCompletionRequestMessageRoleEnum.Assistant,
        content: value,
      },
    ]);
    setValue('');
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className='relative w-3/4 '>
      <div
        className='mx-auto h-[80vh] w-4/5 overflow-y-scroll'
        ref={chatContainerRef}
      >
        {messages.map((item, index) => {
          return item.role === ChatCompletionRequestMessageRoleEnum.User ? (
            <Question content={item.content} key={index} />
          ) : (
            <Answer content={item.content} key={index} />
          );
        })}
      </div>
      <div className='absolute left-[10%] bottom-10  flex w-4/5 justify-center rounded-lg bg-primary'>
        <form className='relative h-full w-full' onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(val) => setValue(val.target.value)}
            placeholder='Start writing here...'
            className='h-16 w-11/12 resize-y  border border-none  border-gray-300 bg-transparent py-1 px-4  text-white outline-none  placeholder:text-slate-300'
          />
          <button
            type='button'
            className='absolute right-7 top-3 flex h-10 w-10 items-center justify-center'
          >
            <AiOutlineSend className='text-3xl text-white' />
          </button>
        </form>
      </div>
    </div>
  );
};
