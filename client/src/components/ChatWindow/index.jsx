import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './styles.css';

export default function ChatWindow() {
    return (
        <div className='w-full flex flex-col'>
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
            <main className='chat-body min-h-screen'>

            </main>
            <footer></footer>
        </div>
    )
}