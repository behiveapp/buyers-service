const Record = require('./record');

class Seller extends Record{
  static get schema(){
    return {
      name: {type: String, required: true},
      identifier: {type: String, required: true, unique: true}
    }
  }
}

module.exports = Seller;