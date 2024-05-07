import { FormEvent, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

function MessageInput() {
  const [message, setMessage] = useState('')

  const {loading, sendMessage} = useSendMessage();

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);

    setMessage('');
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSendMessage}>
        <div className='w-full relative'>
            <input
             type='text' 
             className='border text-sm block w-full p-2.5 border-gray-600 rounded'
             placeholder='Send a message'
             onChange={(e) => setMessage(e.target.value)}
             value={message}
             />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
               {loading ? <span className='loading loading-spinner'/> : <BsSend/>}
            </button>
        </div>
    </form>
  )
}

export default MessageInput