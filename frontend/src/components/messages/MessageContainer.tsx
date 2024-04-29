import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'

function MessageContainer() {

    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>

            {noChatSelected ? <NoChatSelected /> :
                <>
                    {/* Heder */}
                    <div className='bg-indigo-300 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>{' '}
                        <span className='text-indigo-900'>Jonh doe</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            }
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-indigo-400 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}
