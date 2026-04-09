// Event Emitter: Design a class that allows objects to subscribe to and emit custom events

// An Event Emitter is a core design pattern in JavaScript (often called the Observer or Pub/Sub pattern) 
// that allows different parts of an application to communicate without being tightly coupled

class EventEmitter {
  constructor() {
    // Map to store event names as keys and arrays of callbacks as values
    this.events = {};
  }

  // Registers a callback for a specific event
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    // Return a subscription object with an unsubscribe method for easy cleanup
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        if (this.events[eventName].length === 0) {
          delete this.events[eventName];
        }
      }
    };
  }

  // Triggers all callbacks registered for the event with provided arguments
  emit(eventName, ...args) {
    const callbacks = this.events[eventName];
    if (!callbacks) return []; // Return empty if no listeners exist

    // Execute each callback synchronously in the order they were registered
    return callbacks.map(callback => callback(...args));
  }
}

const emitter=new EventEmitter();
// 1 subscribe to an event
const sub=emitter.subscribe('User_login',(user)=>{
    console.log(`welcome ${user}`)
})

// 2 emit the event
emitter.emit('User_login','Alice');

// 3 Unsubscribe when no Londer needed 
sub.unsubscribe();

// No output
emitter.emit('User_login','Bob')