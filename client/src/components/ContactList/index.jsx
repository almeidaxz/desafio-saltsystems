import { useEffect, useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './styles.css';

export default function ContactList({ showContactList, setShowContactList, setActiveChat }) {
    const [contactList, setContactList] = useState([
        { id: 123, avatar: 'https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg', name: 'Fulano de tal' },
        { id: 123, avatar: 'https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg', name: 'Fulano de tei' },
        { id: 123, avatar: 'https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg', name: 'Fulano de tou' },
        { id: 123, avatar: 'https://www.jockeypr.com.br/wp-content/uploads/2018/05/Dummy.jpg', name: 'Fulano de tuou' },
    ]);

    return (
        <aside
            className='contact-list w-[35%] max-w-[415px] flex flex-col top-0 bottom-0 fixed bg-white border-r'
            style={{ left: showContactList === true ? '0' : '-415px' }}
        >
            <header
                className='pt-16 px-4 pb-4 flex items-center bg-[#00BFA5]'
                style={{ color: '#FFF' }}
            >
                <ArrowBackIcon
                    className='cursor-pointer'
                    style={{ width: '24px', height: '24px' }}
                    onClick={(e) => setShowContactList(false)}
                />
                <h2
                    className='text-xl flex items-center h-10 ml-5 flex-1 font-bold'
                >
                    Nova conversa
                </h2>
            </header>
            <div className='contact-list'>
                {contactList.map((contact, key) => {
                    return <div
                        className='p-4 flex items-center cursor-pointer hover:bg-[#F5F5F5]'
                        key={key}
                    >
                        <img
                            className='h-12 w-12 mr-4 rounded-full'
                            src={contact.avatar}
                            alt="avatar photo from contact"
                        />
                        <p
                            className='text-lg'
                        >
                            {contact.name}
                        </p>
                    </div>
                })}
            </div>
        </aside>
    )
}