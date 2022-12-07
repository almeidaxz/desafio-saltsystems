import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function ChatListItem({ setActiveChat, chat, active }) {
    return (
        <div
            onClick={(e) => setActiveChat(chat)}
            className='h-[70px] px-3 gap-3 flex items-center cursor-pointer hover:bg-[#F5F5F5]'
            style={active ? { backgroundColor: '#EBEBEB' } : null}
        >
            <img
                className='h-12 w-12 rounded-full'
                src={chat.contactImage} alt="chat person avatar"
            />
            <div
                className='w-full min-w-0 pb-1 flex flex-col justify-center flex-wrap border-b'
            >
                <div
                    className="w-full flex flex-1 justify-between items-center"
                >
                    <p>{chat.contactName}</p>
                    <span
                        className='text-[#999] text-xs'
                    >
                        17:23
                    </span>
                </div>
                <div
                    className='w-full flex flex-1 justify-between items-center'
                >
                    <p
                        className='max-w-[90%] text-sm text-[#999] truncate'
                    >
                        Esta é a última mensagem enviada por Luscas
                    </p>
                    <VolumeOffIcon
                        fontSize='small'
                        style={{ color: '#919191' }}
                    />
                </div>
            </div>
        </div>
    )
}