const findPattern = require('./findPattern')
const patternModel = require('./app/models/pattern-model')
module.exports = function (fullName,email){
    let pattern = findPattern(fullName ,email);
    let domain = email.slice(email.indexOf('@')+1,email.length);
    let pattern_email = {
        fullName:fullName,
        email:email,
        pattern:pattern,
        domain:domain
    }
    return patternModel.addPattern(pattern_email)
}