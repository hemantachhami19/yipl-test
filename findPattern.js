const splitName = require('./splitName');
module.exports =  function findPattern(fullName, email){
    let defined_pattern = {
        firstName:"{fn}",
        middleName:"{mn}",
        lastName:"{ln}",
    };

    let names = splitName(fullName);
    let nameSection = email.slice(0, email.indexOf('@'));

    for (let key in names) {
        if (names.hasOwnProperty(key) && names[key] !== '') {
            nameSection = nameSection.replace(names[key], defined_pattern[key])
        }
    }
    return nameSection+"@{domain}";

}