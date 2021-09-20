
const dotenv= require('dotenv');
const mongoose=require('mongoose');

dotenv.config({path: './config.env'});
const DB=process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect
(DB,
    {   useUnifiedTopology: true, 
        useNewUrlParser:true, 
        useCreateIndex:true,
        useFindAndModify:false
    }).then(con=>{
        console.log("SUCCESSFUL");
    })

const app=require('./app');
const port=3000;
app.listen(port, ()=>{
    console.log(`app running on port ${port}`);
});

