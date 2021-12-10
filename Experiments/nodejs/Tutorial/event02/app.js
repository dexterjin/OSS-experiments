const EventEmitter = require('events')
// node.js 는 이벤트 기반 런타임이다.
// node.js 의 핵심이라고 할 수 있는 이벤트 처리에 대해 실습해본다.
// emitter.addListener(event, listener) 와 emitter.on(event, listener) 는 동일하며 이벤트를 연결한다.
// emitter.removeListener(event, listener) : 특정 이벤트의 특정 이벤트 핸들러를 제거한다.

// 이벤트 emitter 객체를 
const emitter = new EventEmitter();

// 이벤트 리스너 정의
const listner1 = () => {
    console.log('listner1 executed.');
}

const listner2 = () => {
    console.log('listner2 executed.');
}

// 몇 개의 이벤트 리스너가 해당 이름을 가진 이벤트에 연결되어 있는지 출력한다.
const logListenerCount = (emitter) => {
    const eventListenerCount = emitter.listenerCount(emitter, 'connection');
    console.log(eventListenerCount + " Listner(s) listening to connection event");
}

// connection 이벤트가 발생했을 때 실행될 리스너를 연결한다.
emitter.addListener('connection', listner1);
emitter.on('connection', listner2);
logListenerCount(emitter)

// connection 이벤트를 발생시킨다.
emitter.emit('connection');
emitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// connection 이벤트를 발생시킨다.
emitter.emit('connection');
logListenerCount(emitter)

// 프로그램이 종료된다.
console.log("Program Ended.");
