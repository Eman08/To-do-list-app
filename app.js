const { urlencoded } = require('express');

const todolist=require('./model');
const express=require('express');
const morgan=require('morgan');
const app=express();
const todolistcontroller=require('./controller/modelcontroller');
app.use(express.json());



app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));

app.get('/',todolistcontroller.getAllItems);
app.post('/',todolistcontroller.writeItems);
app.get('/remove/:id',todolistcontroller.deleteitems);


module.exports=app;

