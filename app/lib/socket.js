window.navigator.userAgent = 'react-native'

import { WS_BACKEND_URL } from '../config'


const ws = new WebSocket(WS_BACKEND_URL)

ws.onopen = () => {
  console.log('websocket open')
  ws.send('something'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log('websocket message')
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log('websocket error')
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log('websocket close')
  console.log(e.code, e.reason);
};