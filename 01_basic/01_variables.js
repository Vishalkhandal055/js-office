const accountId = 121
let accountEmail = "vishal@gmail.com"
var accountPassword = "15641"
accountCity = "Jaipur"
let accountState;

//accountId  = 2 // Not allow
console.log(accountId)

/* 
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

accountEmail = "hello@gmail.com"
accountPassword = 4545
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])