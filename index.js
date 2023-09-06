const express=require('express');
const port=8080;
const app=express();

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})