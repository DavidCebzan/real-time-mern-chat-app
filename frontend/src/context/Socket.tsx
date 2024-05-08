import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './AuthContext';
import { Socket, io } from 'socket.io-client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocketContext = createContext<any>({});

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext()

    useEffect(() => {
        if (authUser) {
            console.log('here')
            const socket = io('http://localhost:5000', {
                query: {
                    userId: authUser._id,
                }
            });

            setSocket(socket);
            // socket.on() is used to listend to the events. can be used both on client and server side
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            })

            return () => {
                socket.close();
            }
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
    )
}
