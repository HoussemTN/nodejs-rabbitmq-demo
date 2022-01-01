const http = require("http");
const MyMessage = require("./MyMessage");
const server = http.createServer();
server.listen(3000);
console.log("Server Started");
let producer = require("./producer");

producer.start();
setTimeout(()=>{
    for (let i=0;i<500000;i++){
        setTimeout(()=>{
            let myMessage = JSON.stringify(new MyMessage("Node.js "+i,"Symfony","Hello World!"));
            producer.publish("","DevBrainsQueue",new Buffer.alloc(myMessage.length,myMessage));
            console.log("Message Sent "+i);
        },(i*1000+1000));
    }
    
},3000);