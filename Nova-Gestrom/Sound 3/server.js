const http = require("http");
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const books = [
  "1. The Alchemist",
  "2. Harry Potter",
  "3. Rich Dad Poor Dad",
  "4. Atomic Habits",
  "5. The Great Gatsby"
];

eventEmitter.on("visit", (user) => {
  console.log(`${user} visited the bookstore website.`);
});

setInterval(() => {
  console.log("Server Time:", new Date().toLocaleTimeString());
}, 10000);

const server = http.createServer((req, res) => {
  console.log("Request Received at:", new Date().toLocaleString());
  eventEmitter.emit("visit", "User");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("====== ONLINE BOOKSTORE ======\n\n");
  res.write("Available Books:\n\n");
  books.forEach(book => res.write(book + "\n"));
  res.end("\nThank You for Visiting!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
