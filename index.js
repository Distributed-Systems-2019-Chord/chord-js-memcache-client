const MemcacheClient = require("memcache-client");
let server;
server = "10.0.75.1:25520";
server = "localhost:9000";

// create a normal client
const client = new MemcacheClient({ server });
 
// Find info here: https://www.npmjs.com/package/memcache-client

client.set("key", "akka tcp data test", (err, r) => { 
    console.log(err);
    console.log(r);
});
client.get("key", (err, r) => { 
    console.log(err);
    console.log(r);
 });

 client.set("key2", "akka tcp second data test", (err, r) => { 
    console.log(err);
    console.log(r);
});

client.get("key2", (err, r) => { 
    console.log(err);
    console.log(r);
 });

 