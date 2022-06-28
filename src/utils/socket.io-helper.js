import { io } from '../config/server';

/**
 * init socket.io server
 */
export const socketInit = () => {
    io.on('connection', (socket) => {
        console.log('a client connected on socket', socket.id);
        socket.join('request:logs');
    });

}

/**
 * 
 * @param {*} event 
 * @param {*} message 
 */
export const sendMessageToAllClients = (event, message) => {
    if (io.emit) io.emit(event, message);
}

/**
 * 
 * @param {*} room 
 * @param {*} event 
 * @param {*} message 
 */
export const emitToRoom = (room, event, message) => {
    if (io.to) io.to(room).emit(event, message);
}