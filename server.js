const net = require("net");
const townInfo = require("./locations");
// const login = require('./login')
const ansiColors = require("./ansicolors");
const Chance = require("chance");

let connections = [];

const server = net.createServer((socket) => {
  const chance = new Chance();
  const randomName = chance.name();
  console.log("New connection!");
  connections.push(socket);
  socket.location = { x: 0, y: 0 };
  socket.write(ansiColors.reset); // clear screen
  socket.write(`${ansiColors.fgCyan}
  *******************************
   * * * * REALM WALKER * * * * 
  *******************************
  v1.0 - 2/1/24 ${ansiColors.default}
`);
  // LOGIC FOR CREATION / LOGIN HERE
  // login()

  // Send a welcome message to the connected player
  socket.write(`Welcome to the ${ansiColors.fgMagenta}MUD!\x1b[0m\r\n\n\n\n`);

  // Handle incoming data
  socket.on("data", (data) => {
    data = data.toString().trim().toLowerCase(); // buffer initially
    console.log(`Received: ${data}`);
    // function outsideRange(newX, newY) {
    //     return townInfo.filter(location => location.x == newX && newY).length == 0
    // }
    switch (data) {
      // MOVEMENT
      case "north":
        if (
          townInfo.filter(
            (location) =>
              location.x == socket.location.x &&
              location.y == socket.location.y + 1,
          ).length == 0
        ) {
          socket.write(
            `${ansiColors.fgRed}There is nothing in that direction.\n`,
          );
        } else {
          socket.write(`You attempt to head north.\n`);
          socket.location.y++;
        }
        break;
      case "south":
        if (
          townInfo.filter(
            (location) =>
              location.x == socket.location.x &&
              location.y == socket.location.y - 1,
          ).length == 0
        ) {
          socket.write(
            `${ansiColors.fgRed}There is nothing in that direction.\n`,
          );
        } else {
          socket.write(`You attempt to head south.\n`);
          socket.location.y--;
        }
        break;
      case "east":
        if (
          townInfo.filter(
            (location) =>
              location.x == socket.location.x + 1 &&
              location.y == socket.location.y,
          ).length == 0
        ) {
          socket.write(
            `${ansiColors.fgRed}There is nothing in that direction.\n`,
          );
        } else {
          socket.write(`You attempt to head east.\n`);
          socket.location.x++;
        }
        break;
      case "west":
        if (
          townInfo.filter(
            (location) =>
              location.x == socket.location.x - 1 &&
              location.y == socket.location.y + 1,
          ).length == 0
        ) {
          socket.write(
            `${ansiColors.fgRed}There is nothing in that direction.${ansiColors.default}\n`,
          );
        } else {
          socket.write(`You attempt to head west.\n`);
          socket.location.x--;
        }
        break;
      // SENSES
      case "look":
        socket.write(`${ansiColors.dim}You look around.\n`);
        let spot = townInfo.filter(
          (location) =>
            location.x == socket.location.x && location.y == socket.location.y,
        );
        socket.write(`${spot[0].desc}`);
        break;
      // UTILITY
      case "who":
        socket.write(`Total Online: ${connections.length}\n`);
        break;
      case "quit":
        socket.end();
        connections = connections.filter((connection) => connection !== socket);
        break;
      // CHAT
      default:
        connections.forEach((connection) => {
          if (socket != connection) {
            connection.write(
              `${ansiColors.fgBlue}${randomName}:${ansiColors.default}${data}\n`,
            );
          }
        });
        break;
    }
    console.log(socket.location);
  });

  // Handle disconnection
  socket.on("end", () => {
    console.log("Connection closed");
  });
});

const PORT = 3000; // Choose a port number
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
