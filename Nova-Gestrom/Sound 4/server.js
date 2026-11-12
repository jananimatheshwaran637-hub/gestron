const EventEmitter = require("events");
const monitor = new EventEmitter();

monitor.on("uptimeCheck", (time) => {
    console.log("Server Uptime:", time, "seconds");
});

function logStatus(callback) {
    setTimeout(() => {
        callback("Server is running normally.");
    }, 1000);
}

setInterval(() => {
    const uptime = Math.floor(process.uptime());
    monitor.emit("uptimeCheck", uptime);

    logStatus((message) => {
        console.log(message);
    });

    setTimeout(() => {
        console.log("Background log saved successfully.");
    }, 500);

    console.log("-----------------------------");
}, 5000);

console.log("Background Uptime Monitoring Started...");
