import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function ChatListItem() {
    return (
        <div
            className='h-[70px] px-3 gap-3 flex items-center cursor-pointer hover:bg-[#F5F5F5]'
        >
            <img
                className='h-12 w-12 rounded-full'
                src="https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg" alt="chat person avatar"
            />
            <div
                className='w-full min-w-0 pb-1 flex flex-col justify-center flex-wrap border-b'
            >
                <div
                    className="w-full flex flex-1 justify-between items-center"
                >
                    <p>LUCAS BRAZ</p>
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