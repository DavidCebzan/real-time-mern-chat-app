import { useEffect } from 'react'
import { useSocketContext } from '../context/Socket'
import useConversation from '../zustand/useConversation';
import { Message } from '../types/dbTypes';
import notificationSound from '../assets/sounds/notification.mp3'

export const useListenMessages = () => {
  const {socket} = useSocketContext();

  const {messages, setMessages} = useConversation();

    useEffect(() => {
        socket?.on('newMessage', (newMessage: Message) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off('newMessage')
    }, [messages, setMessages, socket])

}
