const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3005;
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const db = client.db("mud_game");
const usersCollection = db.collection("users");
app.use(bodyParser.json());

async function run() {
  app.post("/authenticate", async (req, res) => {
    const { action, username, password } = req.body;
    try {
      if (action === "create") {
        // Check if already in use
        const user = await usersCollection.findOne({ username });
        if (user) {
          res.json({ success: false, message: "User already exists." });
          return;
        }
        // Create new character
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { username, hashedPassword };
        await usersCollection.insertOne(newUser);
        res.json({ success: true, message: "Character created successfully." });
      } else if (action === "login") {
        // Login
        const user = await usersCollection.findOne({ username });
        if (!user) {
          res.json({ success: false, message: "User not found." });
          return;
        }
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword,
        );
        if (passwordMatch) {
          res.json({
            success: true,
            message: "Login successful.",
            playerInfo: { username: user.username },
          });
        } else {
          res.json({ success: false, message: "Incorrect password." });
        }
      } else {
        res.json({ success: false, message: "Invalid action." });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error." });
    }
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
run();
