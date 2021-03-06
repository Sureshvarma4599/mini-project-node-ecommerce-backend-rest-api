const mongoose = require('mongoose')

const User = mongoose.model('User',{
   //_id: mongoose.model.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
       match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true }
});


module.exports={User}