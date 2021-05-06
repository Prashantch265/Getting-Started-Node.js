const app = require('./express');
const sequelize = require('../database/models');
require('dotenv').config();

let port = process.env.PORT;

app.listen(port, () => console.log(`Server started on ${port}`));

try{
    sequelize.sync({force: true})
    .then(()=> console.log("DB connected"));
}catch(err){
    console.log(err);
}