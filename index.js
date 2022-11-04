const express = require("express")
const axios = require('axios');
const app =express()

app.get('/api',async(req,res)=>{
   await axios(
        {
            method:'get',
            url:'http://tv.tvzon.tv/stalker_portal/server/load.php?type=stb&action=get_profile&hd=1&ver=&num_banks=undefined&sn=undefined&stb_type=&client_type=STB&image_version=undefined&video_out=&device_id=&device_id2=&signature=&auth_second_step=0&hw_version=undefined&not_valid_token=0&metrics=%7B%22mac%22%3A%22%22%2C%22model%22%3A%22%22%2C%22type%22%3A%22STB%22%2C%22uid%22%3A%22%22%2C%22random%22%3A%22bbdeed1c7364d277bf659b4afc8dd9de09aba118%22%7D&hw_version_2=&timestamp=1667554370&api_signature=0&prehash=0&JsHttpRequest=1-xml',
            headers:{
                'accept-encoding': 'gzip, deflate, br'
            }
        }
    ).then(function(response){
        res.sendFile(__dirname+"/index.html");
    }).catch( function (response){
        console.log(response)
    })
    // res.send("Hello world");
});


app.listen(8000,()=>{
    console.log(`Server is running at 8000`);
})