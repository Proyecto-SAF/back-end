const {model, Schema}= require('mongoose');
const {} = require('./users');
const  ProductorShema = new Schema({

    userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    


    descripcion:{
        type:String,
        required: [true, "la descripcion es necesaria"]
    },
    cultivo:[
        {
            type: String,
            required: [true, "el cultivo es necesario"]
        } 
    ],
    hectareas:{
        
        type: Number,
        required: [true, "las hectarias son necesario"]
        
    }


});

module.exports = model('Productor', ProductorShema);