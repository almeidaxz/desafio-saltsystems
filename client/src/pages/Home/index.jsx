import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Home() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}])

  return (
    <div className="flex h-screen bg-[#EDEDED]">
      <aside className="w-[35%] max-w-[415px] flex flex-col border-r">
        <header
          className="h-16 px-4 flex justify-between items-center cursor-pointer"
        >
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg" alt="dummy avatar photo"
          />
          <div className="flex">
            <ChatIcon style={{ color: '#919191' }} />
            <MoreVertIcon style={{ color: '#919191' }} />
          </div>
        </header>
        <div className='bg-[#F6F6F6] border-b py-2 px-4'>
          <div
            className='h-10 rounded-2xl flex items-center py-0 px-2 bg-[#FFF]'
          >
            <SearchIcon
              fontSize='small'
              style={{ color: '#919191' }}
            />
            <input
              className='flex-1 border-none outline-none bg-transparent ml-2'
              type="search"
              placeholder='Procurar ou começar uma nova conversa'
            />
          </div>
        </div>
        <div>
          {chatList.map((chat, key) => {

          })}
        </div>
      </aside>
      <main>
        ...
      </main>
    </div>
  )
}