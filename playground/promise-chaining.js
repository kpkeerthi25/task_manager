require('../src/db/mongoose')
const User=require('../src/models/user')

User.findByIdAndUpdate('5eb5ad273947355ae4cff187',{age:10}).then(()=>{
    return User.countDocuments({age:1});
}).then((result)=>{
    console.log(result)
}).catch((er)=>{
    console.log(err)
})