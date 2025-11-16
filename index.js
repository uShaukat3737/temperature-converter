const express = require("express"); //load express class
const app = express(); //use express class
const PORT = process.env.PORT || 3000; //host on port3000


app.get("/", (req, res) => {
    res.send("Temperature Converter Web Service is Running!");
});


app.get("/toCelsius", (req, res) => {
    const f = parseFloat(req.query.f);
    if (isNaN(f)) return res.status(400).json({ error: "Invalid Fahrenheit value" });

    const c = (f - 32) * 5/9;
    res.json({ fahrenheit: f, celsius: c });
});

app.get("/toFahrenheit", (req, res) => {
    const c = parseFloat(req.query.c);
    if (isNaN(c)) return res.status(400).json({ error: "Invalid Celsius value" });

    const f = (c * 9/5) + 32;
    res.json({ celsius: c, fahrenheit: f });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
