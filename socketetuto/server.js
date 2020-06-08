const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages.js');
const {userJoin,getCurrentUser} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static(path.join(__dirname,'public')));

const botName = 'ChatCord Bot';

//run when client connect
io.on('connection',socket => {

    socket.on('joinroom',( {username,room} ) => {

        const user  = userJoin(socket.id, username, room);
        socket.join(user.room);

    //welcome crurrent user
    socket.to(user.room).emit(
        'message',formatMessage(botName,'welcome to chatcord'));

    //broadcast when user connected
    socket.broadcast
    .to(user.room)
    .emit('message',formatMessage(botName,`${user.username} has joined the chat`));
    });

    //listen for chatmessage
    socket.on('chatMessage', msg => {

        const user = getCurrentUser(socket.id);

        io.to(user).emit('message',formatMessage(user.username, msg));
    });

    //Run when client disconnect
    socket.on('disconnect',() =>  {
      io.emit('message', formatMessage(botName, 'a user has left th chat'))
    });
    
});

const PORT = 2000 || process.env.PORT
server.listen(PORT,() => console.log(`Server running on port ${PORT}`))