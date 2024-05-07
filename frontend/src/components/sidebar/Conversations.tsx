import Conversation from './Conversation'
import { useGetConversations } from '../../hooks/useGetConversations'

function Conversations() {

  const {loading, converations} = useGetConversations();

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {converations.map((conversation, index) => (<Conversation key={conversation._id} user={conversation} isLast={index === converations.length - 1}/>))}
        {loading && <span className='loading loading-spinner'/>}
    </div>
  )
}

export default Conversations