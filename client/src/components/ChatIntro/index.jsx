import IntroImage from '../../assets/chat-intro.png';

export default function ChatIntro() {
    return (
        <div
            className='h-screen flex flex-col justify-center items-center bg-[#F0F2F5] border-b-8 border-b-[#4ADF83]'
        >
            <img src={IntroImage} alt='background image with phone and pc' />
            <h1
                className='text-4xl font-light text-[#41525D]'
            >
                WhatsApp Web
            </h1>
            <h2
                className='mt-4 text-center text-[#667781]'
            >
                Envie e receba mensagens sem precisar manter seu celular conectado à internet.<br />Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo.
            </h2>
        </div>
    )
}