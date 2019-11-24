const MemcacheClient = require("memcache-client");
let server;
server = "10.0.75.1:25520";
server = "localhost:9000";

// create a normal client
const client = new MemcacheClient({ server });
 
// Create a client that ignores NOT_STORED response (for McRouter AllAsync mode)
const mrClient = new MemcacheClient({ server, ignoreNotStored: true });
 
// You can specify maxConnections by using an object for server
// Default maxConnections is 1
 
const mClient = new MemcacheClient({ server: { server, maxConnections: 5 } });
 
client.set("key", "akka tcp data test", (err, r) => { 
    console.log(err);
    console.log(r);
});
client.get("key", (err, r) => { 
    console.log(err);
    console.log(r);
 });
 