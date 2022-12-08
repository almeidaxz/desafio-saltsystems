import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EmojiPicker from 'emoji-picker-react';

import './styles.css';
import { useState } from 'react';
import MessageItem from '../MessageItem';

export default function ChatWindow() {
    const [message, setMessage] = useState('');
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [messageList, setMessageList] = useState([1, 2, 3, 4]);
    const previewConfig = {
        defaultEmoji: 'none',
        defaultCaption: 'none',
        showPreview: false
    }

    const handleEmojiClick = (e) => {
        setMessage(`${message}${e.emoji}`)
    }

    return (
        <div className='w-full flex flex-col h-full'>
            <header
                className='w-full py-3 px-4 flex items-center gap-4 border-b'
            >
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg" alt="contact avatar photo"
                />
                <div className='w-full flex items-center justify-between'>
                    <p>Nome do Contato</p>
                    <div className='flex items-center gap-8'>
                        <SearchIcon style={{ color: '#919191' }} />
                        <MoreVertIcon style={{ color: '#919191' }} />
                    </div>
                </div>
            </header>
            <main className='w-full chat-body py-5 px-8'>
                {messageList.map((message, key) => {
                    return <MessageItem
                        key={key}
                        message={message}
                    />
                })}
            </main>
            <div
                className='emojis-container'
                style={{ height: emojiOpen ? '250px' : 0 }}
            >
                {emojiOpen &&
                    <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        searchDisabled
                        skinTonesDisabled
                        width='full'
                        height='inherit'
                        previewConfig={previewConfig}
                    />
                }
            </div>
            <footer
                className='h-16 px-6 flex items-center gap-4'
            >
                {emojiOpen ?
                    <CloseRoundedIcon
                        className='cursor-pointer'
                        fontSize='medium'
                        style={{ color: '#919191' }}
                        onClick={(e) => setEmojiOpen(false)}
                    />
                    :
                    <MoodIcon
                        className='cursor-pointer'
                        fontSize='medium'
                        style={{ color: '#919191' }}
                        onClick={(e) => setEmojiOpen(true)}
                    />
                }
                <input
                    className='flex-1 h-10 pl-4 border-none outline-none rounded-lg'
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Mensagem'
                />
                <SendIcon
                    className='cursor-pointer'
                    fontSize='medium'
                    style={{ color: '#919191' }}
                />
            </footer>
        </div>
    )
}