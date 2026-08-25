const express = require("express");

const app = express();

const PORT = 3001;

// Home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server</h1><p>Home Page</p>");
});

// About route
app.get("/about", (req, res) => {
    res.send("<h2>About</h2><p>This server demonstrates basic Express routing.</p>");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("<h2>Contact</h2><p>You can contact us through this page.</p>");
});

// JSON route
app.get("/api/info", (req, res) => {
    res.json({
        status: "online",
        project: "Express Demo",
        message: "Server is working successfully"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});
