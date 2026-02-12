//SYNC

//const crypto = require("crypto");
// const BeforeExe = Date.now();
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log(Date.now()-BeforeExe);

//ASYNC

// const crypto=require("crypto");
// const BeforeExe=Date.now();
// crypto.pbkdf2("passwordjnijklojjj","salt",100000,512,"sha512",() => {
//     crypto.pbkdf2("password","salt",100000,512,"sha512",() => {
//           crypto.pbkdf2("password","salt",100000,512,"sha512", () => {
// console.log(Date.now()-BeforeExe);
//       });
//    });
// });

const events = require("events");
// create EventEmitter object
const eventEmitter = new events.EventEmitter();

// event handler
const eventHandler = (extra_cheese, olive) => {
  console.log("Start Preparing Pizza! 🍕");
  //console.log("Extra cheese:", extra_cheese);
  //console.log("Olives:", olive);
};

// event listener
eventEmitter.on("orderPizza", (extra_cheese, olive) => {
  console.log("Order Received! ✅");
  eventHandler(extra_cheese, olive);
});

// emit event with data
eventEmitter.emit("orderPizza");


