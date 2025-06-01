const accountID = 144553
let accountEmail = "samura@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"


//accountID = 2// not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "faridpur"


console.log(accountID);
 


/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table({accountID,accountEmail,accountPassword,accountCity})
