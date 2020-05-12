const mongoose = require('mongoose')

mongoose.connect(process.env.dbname,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully")
}).catch(error=>{
    console.log("error not connected to db")
})


