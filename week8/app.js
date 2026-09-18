const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false
    })
);

// Login page
app.get("/", (req, res) => {
    res.render("login", {
        error: null
    });
});

// Login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {

        req.session.username = username;
        req.session.isLoggedIn = true;

        res.redirect("/dashboard");

    } else {

        res.render("login", {
            error: "Invalid username or password"
        });

    }
});

// Authentication middleware
function isAuthenticated(req, res, next) {

    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect("/");
    }
}

// Protected route
app.get("/dashboard", isAuthenticated, (req, res) => {

    res.render("dashboard", {
        username: req.session.username
    });

});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.send("Unable to logout");
        }

        res.redirect("/");

    });

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
