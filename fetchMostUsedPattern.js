const findPattern = require('./findPattern')
const patternModel = require('./app/models/pattern-model')
module.exports = function (domain){
    return patternModel.fetchMostUsedPattern(domain)
}