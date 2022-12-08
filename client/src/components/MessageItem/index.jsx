import './styles.css';

export default function MessageItem({ message }) {
    return (
        <div
            className="message-item px-1 py-2 flex flex-col mb-2 bg-white rounded-lg"
            style={{justifyContent: message.author}}
        >
            <p
                className="text-sm my-1 mr-10 ml-2"
            >
                TESTE
            </p>
            <span
                className="h-4 -mt-4 text-xs text-[#999] mr-1 text-right"
            >
                15:00
            </span>
        </div>
    )
}