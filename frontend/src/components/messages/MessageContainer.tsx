import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

function MessageContainer() {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
        {/* Heder */}
        <div className='bg-indigo-300 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{' '}
            <span className='text-indigo-900'>Jonh doe</span>
        </div>

        <Messages/>
        <MessageInput/>
        </>
    </div>
  )
}

export default MessageContainer