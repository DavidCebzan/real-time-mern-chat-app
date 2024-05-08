import MessageItem from './MessageItem'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { useEffect, useRef } from 'react';
import { useListenMessages } from '../../hooks/useListenMessages';

function Messages() {

  const { loading, messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: 'smooth'})
    }, 100)
  }, [messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
       <div key={message._id} ref={lastMessageRef}>
       <MessageItem message={message}/>
       </div>
      ))}

      {loading && (<><MessageSkeleton /> <MessageSkeleton /> <MessageSkeleton /> </>)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages