const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {

    const username = req.body.username;
    const age = Number(req.body.age);

    const errors = [];

    if (!username || username.trim() === "") {
        errors.push("Name is required");
    }

    if (!age || age < 18) {
        errors.push("Age must be 18 or above");
    }

    if (errors.length > 0) {
        return res.render("result", {
            errors: errors,
            name: username,
            userAge: age
        });
    }

    res.render("result", {
        errors: [],
        name: username,
        userAge: age
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
