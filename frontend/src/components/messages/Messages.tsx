import MessageItem from './MessageItem'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

function Messages() {

  const { loading, messages } = useGetMessages();

  console.log(messages, 'MESSAGES')
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <MessageItem key={message._id} message={message}/>
      ))}

      {loading && (<><MessageSkeleton /> <MessageSkeleton /> <MessageSkeleton /> </>)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages