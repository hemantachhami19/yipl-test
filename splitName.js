module.exports = function splitName(name){
    const names = name.split(' ');
    if (names.length > 2) {
        return {firstName: names[0], middleName: names.slice(1, -1).join(' '), lastName: names[names.length - 1]};
    } else if (names.length < 2) {
        return {firstName: names[0], middleName: '', lastName: ''};
    }
    return {firstName: names[0], middleName: '', lastName: names[names.length - 1]};
}