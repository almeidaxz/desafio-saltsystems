import './styles.css';

export default function MessageItem({ message, user }) {
    return (
        <div
            className='mb-2 flex'
            style={{ justifyContent: user.id === message.authorId ? 'flex-end' : 'flex-start' }}
        >
            <div
                className="message-item px-1 py-1 flex flex-col bg-white rounded-lg"
                style={{ backgroundColor: user.id === message.authorId ? '#DCF8C6' : '#FFF' }}
            >
                <p
                    className="text-sm my-1 mr-10 ml-2"
                >
                    {message.body}
                </p>
                <span
                    className="h-4 -mt-4 text-xs text-[#999] mr-1 text-right"
                >
                    {message.time}
                </span>
            </div>

        </div>
    )
}