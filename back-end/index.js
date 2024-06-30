const express = require("express");
const app= express();
const {connection }= require('./config/db');
require('dotenv').config();


(async()=>{
try {
     await connection;
     console.log('connected to data base');
} catch (error) {
    console.log("error while trying to connect to db ");
}
})();




app.get('/', (req,res)=>{
   res.send("iam server for makeup api")
});

app.listen(3000  ,  async () => {
    console.log(`app running at port 3000`);
})