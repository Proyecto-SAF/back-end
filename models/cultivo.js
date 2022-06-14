const {model, Schema}= require('mongoose');
const {} = require('./users');

const CultivoSchema = new Schema({

  userId:{type:Schema.Types.ObjectId, ref: 'User'
      },

    cultivo:{
       type:String,
       required: [true, "el cultivo es necesario"]

    }
  });

module.exports = model('Cultivo', CultivoSchema);