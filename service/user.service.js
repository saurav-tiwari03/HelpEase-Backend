const query = require('../query/user.query')
const model = require('../models/user.model')

exports.getClient = (query) => {
  return dal.aggregate(query,model)
}