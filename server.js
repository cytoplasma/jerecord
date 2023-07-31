const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 5000;

const rooms = {};

io.on('connection', (socket) => {
    socket.on('join', ({ username, roomId }) => {
        // add users to chatroom and handle authentication
    });
    socket.on('message', ({ roomId, username, message }) => {
        // save the messages to the MONGODB database and display it in the room
    });
    socket.on('disconnect', () => {
        // handle user disconnection and notify others in the room?
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


