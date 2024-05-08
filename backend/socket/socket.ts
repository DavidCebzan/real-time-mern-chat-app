import express from "express";
import http from 'http';
import {Server} from 'socket.io'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ['GET', 'POST']
    }
});

export const getRevieverSocketId = (recieverId: string) => {
    return userSocketMap[recieverId];
}

const userSocketMap: Record<string,string> = {}; // userId: socketId;

io.on('connection', (socket) => {
    console.log('a user connecte', socket.id);

    const userId = socket.handshake.query.userId;

    if(userId != undefined) {
        userSocketMap[userId as string] = socket.id;
    }

    // io.emit() is used to send events to all the connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // socket.on() is used to listend to the events. can be used both on client and server side
    socket.on('disconnect', () => {
        console.log('user disconected', socket.id);
        delete userSocketMap[userId as string];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})


export {app, io, server}