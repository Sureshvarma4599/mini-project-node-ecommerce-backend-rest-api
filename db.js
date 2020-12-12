const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/ecommerce?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology:true
})
.then(ok => console.log("database connected"))
.catch(err => console.log("error occcured in connection",err))
module.exports=mongoose;