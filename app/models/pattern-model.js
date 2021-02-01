var db = require('../../config/database');
var dbFunc = require('../../config/db-function');

var patternModel = {
    fetchMostUsedPattern:fetchMostUsedPattern,
    addPattern:addPattern,
}

function fetchMostUsedPattern(domain) {
     return new Promise((resolve,reject) => {
         let sql =  `select pattern, count(*) as count from patterns  where domain = "${domain}" group by pattern order by count(*) desc limit 1;`;
        db.query(sql,(error,rows)=>{
            dbFunc.connectionRelease;
            if(!error) {
                resolve(rows);
            } else {
                reject(error);
            }
       });
    });

}


function addPattern(email_pattern) {
   return new  Promise((resolve,reject) => {
    let sql =  `INSERT INTO patterns (full_name,email, pattern,domain) VALUES ("${email_pattern.fullName}","${email_pattern.email}", "${email_pattern.pattern}","${email_pattern.domain}");`;
    db.query(sql,(error,rows)=>{
        if(error) {
            dbFunc.connectionRelease;
            reject(error);
        } else {
            dbFunc.connectionRelease;
            resolve(rows);
        }
      });
    })
}




module.exports = patternModel;

