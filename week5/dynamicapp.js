const express = require("express");

const app = express();

const PORT = 3002;

// 1. Route Parameter
app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;

    res.send(`<h2>Student Profile</h2>
              <p>Student ID: ${studentId}</p>`);
});

// 2. Multiple Route Parameters
app.get("/product/:category/:name", (req, res) => {
    const { category, name } = req.params;

    res.send(`<h2>Product Details</h2>
              <p>Category: ${category}</p>
              <p>Product: ${name}</p>`);
});

// 3. Query Parameters
app.get("/search", (req, res) => {
    const { keyword, type } = req.query;

    res.send(`<h2>Search Results</h2>
              <p>Keyword: ${keyword || "Not provided"}</p>
              <p>Type: ${type || "All"}</p>`);
});

// 4. Multiple Query Parameters
app.get("/filter", (req, res) => {
    const { category, sort } = req.query;

    res.send(`<h2>Filtered Products</h2>
              <p>Category: ${category || "All"}</p>
              <p>Sort By: ${sort || "Default"}</p>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Dynamic URL server running at http://localhost:${PORT}`);
});
