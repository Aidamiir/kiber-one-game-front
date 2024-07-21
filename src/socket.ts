import { io } from 'socket.io-client';

const socket = io('https://kiber-one-game/api');

export default socket;
