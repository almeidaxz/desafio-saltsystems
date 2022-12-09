import { useEffect, useState } from 'react';

import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import ChatListItem from '../../components/ChatListItem';
import ChatIntro from '../../components/ChatIntro';
import ChatWindow from '../../components/ChatWindow';

import ContactList from '../../components/ContactList';

import './styles.css';
import api from '../../services/api';

export default function Home() {
  const [chatList, setChatList] = useState([]);
  const [user, setUser] = useState(null);
  const [showContactList, setShowContactList] = useState(false);
  const [activeChat, setActiveChat] = useState({});

  const getUserData = async () => {
    let logedUser = {};

    const id = localStorage.getItem('id');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const avatar = 'https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg';
    logedUser = { id, email, name, avatar };

    setUser(logedUser);

    try {
      console.log(user);
      const { data } = await api.get(`chat_list/${logedUser.id}`);

      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex h-screen bg-[#EDEDED]">
      <aside className="w-[35%] max-w-[415px] flex flex-col border-r">
        <ContactList
          showContactList={showContactList}
          setShowContactList={setShowContactList}
          setActiveChat={setActiveChat}
        />
        <header
          className="h-16 px-4 flex justify-between items-center cursor-pointer"
        >
          <img
            className="h-10 w-10 rounded-full"
            src={user?.avatar}
            alt="dummy avatar photo"
          />
          <div className="flex">
            <ChatIcon
              onClick={(e) => setShowContactList(true)}
              style={{ color: '#919191' }}
            />
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
        <div
          className='chat-list flex-1 bg-white overflow-y-auto'
        >
          {chatList.map((chat, key) => {
            return <ChatListItem
              key={key}
              chat={chat}
              setActiveChat={setActiveChat}
              active={activeChat.chatId === chatList[key].chatId}
            />
          })}
        </div>
      </aside>
      <main className='flex-1'>
        {activeChat.chatId &&
          <ChatWindow
            user={user}
          />
        }
        {!activeChat.chatId &&
          <ChatIntro />
        }
      </main>
    </div>
  )
}