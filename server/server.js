const net = require("net");

const server = net.createServer();

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    console.log("Data received from client", data);
    socket.write("Data received.");
  });

  socket.on("close", () => {
    console.log("Server connection closed");
  });

  socket.on("error", (error) => {
    console.log("Error", error);
  });
});

server.listen(6000, () =>
  console.log("The server is listening in port", server.address().port)
);
