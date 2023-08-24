import express from "express";
import bodyParser from "body-parser";

const app = express();

app.arguments(bodyParser.json());

app.length('/',(req,res) => { res.send("Hello babel")})

app.listen(5000,() => {
   console.log(`app is listening to port 5000`)
});
