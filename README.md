# Chat App with MERN Stack

This Chat App is a modern, real-time messaging platform built with the MERN stack (MongoDB, Express.js, React, and Node.js), integrated with JWT (JSON Web Tokens) for authentication, and Socket.io for bi-directional communication between clients and servers. This app allows users to sign up, log in, and chat in various chat rooms or in private messages.

## Features

- User authentication (signup and login)
- JWT-based session management
- Real-time messaging using Socket.io
- User status indicators (online/offline)
- Responsive design for desktop and mobile devices

## Technologies

- **MongoDB**: NoSQL database for storing user and chat data
- **Express.js**: Back-end web application framework running on top of Node.js
- **React**: Front-end JavaScript library for building user interfaces
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine
- **Socket.io**: Enables real-time, bidirectional and event-based communication
- **JWT**: Used for secure transmission of information between parties as a JSON object

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (at least version 14)
- MongoDB (local setup or MongoDB Atlas)
- npm as your package manager

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DavidCebzan/real-time-mern-chat-app.git

   cd real-time-mern-chat-app
    ```
2. **Set up the backend:**
    
   Install dependencies in the root folder.

    ```bash
    npm install
    ```
     
    Start the backend server.
    
    ```bash
    npm run server
    ```

3. **Set up the frontend:**

Open another terminal, navigate to the frontend folder from the root directory, and install dependencies.

```bash
cd frontend
npm install
```

 Start the React development server.


```bash
npm run dev
```
 Your default web browser will open at http://localhost:3000.
