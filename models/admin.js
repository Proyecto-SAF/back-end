const {model, Schema}= require('mongoose');
const {} = require('./users');
const  AdminShema = new Schema({

    userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

   
    cod_empleado:{
        
        type: Number,
        required: [true, "las hectarias son necesario"]
        
    }


});

module.exports = model('Admin', AdminShema);