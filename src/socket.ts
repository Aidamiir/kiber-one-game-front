import { io } from 'socket.io-client';

const socket = io('https://kiber-one-game.ru/api');

export default socket;
