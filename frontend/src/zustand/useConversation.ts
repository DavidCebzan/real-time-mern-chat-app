import { create } from "zustand";
import { User } from "../types/dbTypes";

type UseConversation = {
    selectedConversation: null | User,
    setSelectedConversation: (selectedConversation: User) => void,
    messages: [],
    setMessages: (messages: []) => void,
}

const useConversation = create<UseConversation>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: User) => set({selectedConversation}),
    messages: [],
    setMessages: (messages: []) => set({messages}),
}))

export default useConversation;