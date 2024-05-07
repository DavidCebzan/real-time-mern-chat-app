import { create } from "zustand";
import { Message, User } from "../types/dbTypes";

type UseConversation = {
    selectedConversation: null | User,
    setSelectedConversation: (selectedConversation: User | null) => void,
    messages: Message[],
    setMessages: (messages: Message[]) => void,
}

const useConversation = create<UseConversation>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: User | null) => set({selectedConversation}),
    messages: [],
    setMessages: (messages: Message[]) => set({messages}),
}))

export default useConversation;