const splitName = require('./splitName');
module.exports = function generateEmail(fullName, domain,pattern) {
    let defined_pattern = {
        firstName:"{fn}",
        middleName:"{mn}",
        lastName:"{ln}",
    };
    let names = splitName(fullName);

    for (let key in defined_pattern) {
        if ( names[key] !== '') {
            pattern = pattern.replace(defined_pattern[key],names[key].toLowerCase())
        }else {
            pattern = pattern.replace(defined_pattern[key]+'.','')
        }
    }

    return pattern.replace("{domain}",domain)
};