// Prompt user to either login or create new character
    // If new character
        // Get name > check in alrady in use
        // Get password
        // Save to database (encrypted)
        // Set to this player on server&front
    // If returning player
        // Prompt for username & password
        // Send to server to verify
            // If failed, send back error message
            // If success, send back player information
                // Setup player information such as location
