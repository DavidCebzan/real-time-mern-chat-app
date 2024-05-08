import React from 'react'
import { Message } from '../../types/dbTypes'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { generateAvatarFromName } from '../../utils/generateAvatarFromName';
import { extractTime } from '../../utils/extractTime';

type MessageItemProps = {
    message: Message;
}
//3:47
function MessageItem({message}: MessageItemProps) {

    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();

    const ownMessage = message.senderId === authUser._id;

    const chatClassname = ownMessage ? 'chat-end' : 'chat-start';

    const profilePic =  generateAvatarFromName(ownMessage ? authUser.fullName : selectedConversation?.fullName);

    const bgBubbleColor = ownMessage ? 'bg-indigo-300' : '';

  return (  
    <div className={`chat ${chatClassname}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} />
            </div>


        </div>

        <div className={`chat-bubble text-white pb-2 ${bgBubbleColor}`}>
           {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
            {extractTime(message.createdAt ?? '')}
        </div>
    </div>
  )
}

export default MessageItem