const EventEmitter = require('events');
// node.js 는 이벤트 기반 런타임이다.
// node.js 의 핵심이라고 할 수 있는 이벤트 처리에 대해 실습해본다.
// 아래는 이벤트가 발생되었을 때 handler 함수의 실행을 볼 수 있는 예제이다.

const emitter = new EventEmitter();

// connection 이벤트가 발생했을 때 실행될 이벤트 핸들러다.
const connectHandler = () => {
    console.log('connection successful.');
    emitter.emit('data_received');
}

// connection 이벤트를 받을 수 있도록 연결한다.
emitter.on('connection', connectHandler);

// connectHandler 가 실행되면서 발생하는 data_received 이벤트를 받을 수 있도록 연결한다.
emitter.on('data_received', () => {
    console.log('data received successfully.');
});

// connection 이벤트를 발생시킨다.
emitter.emit('connection');

// 프로그램이 종료된다.
console.log("Program Ended.");