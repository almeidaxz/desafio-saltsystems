import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';

import './styles.css';

export default function ChatWindow() {
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
            <main className='chat-body'>

            </main>
            <footer
                className='h-16 px-6 flex items-center gap-4'
            >
                <MoodIcon
                    className='cursor-pointer'
                    fontSize='medium'
                    style={{ color: '#919191' }}
                />
                <input
                    className='flex-1 h-10 pl-4 border-none outline-none rounded-lg'
                    type="text"
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