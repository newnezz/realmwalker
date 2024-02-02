# Realm Walker (MUD)

A basic Multi-User Dungeon (MUD) server implemented in Node.js, providing a text-based adventure game.

## Features

- **Movement:** Navigate through different locations in the game world.
- **Senses:** Look around to explore the environment.
- **Utility Commands:** Check the number of players online (`who`), and quit the game (`quit`).
- **Chat:** Communicate with other players through a chat system.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mud-magic-server.git
   ```

2. Navigate to the project directory

    ```bash
    cd mud-magic-server
    ```
3. Install dependencies
    ```bash
    npm install
    ```

## Usage
1. Start the server
    ```bash
    node server.js
    ```
2. Connect to the server using a Telnet client or Mudlet.
3. Enjoy the text based adventure!


## Commands
### Movement:
- north: Move north.
- south: Move south.
- east: Move east.
- west: Move west.
#### Senses:
- look: Look around the current location.
### Utility:
- who: Check the number of players online.
- quit: Quit the game.
### Chat:
- Send messages to other players by typing your message.

## Contributing
If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature.
3. Commit your changes: git commit -am 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.