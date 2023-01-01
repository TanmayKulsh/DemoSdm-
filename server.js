const express = require("express");

const app = express();

app.get("/",function(req,resp){
    resp.sendFile("welcome.html",{root:__dirname});
});

app.listen(5000);
console.log("server is running on port number 5000");