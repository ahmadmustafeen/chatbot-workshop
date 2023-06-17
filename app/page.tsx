'use client';

// This is a client component 👈🏽

import { Chat } from 'components/chat';
import { SideBar } from 'components/sidebar';

const Home: React.FC = () => {
  return (
    <div className='flex h-screen w-screen flex-row bg-slate-900 py-10'>
      <SideBar />
      <Chat />
    </div>
  );
};

export default Home;
