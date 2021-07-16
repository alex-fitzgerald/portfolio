const express = require("express");
const PORT = process.env.port || 3001;

const app = express();
app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(PORT , () => {
    console.log("server listening on " + PORT)
});
