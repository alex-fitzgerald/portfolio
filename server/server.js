const express = require("express");

const app = express();
app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });