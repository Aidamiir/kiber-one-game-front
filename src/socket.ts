import { io } from 'socket.io-client';

const socket = io('http://localhost:8080'); // адрес вашего WebSocket сервера

export default socket;
