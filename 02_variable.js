const accountId = 12346
let accountName ="Gautami"
var accountPass ="1452"
accountCity = "nashik" //  not used 
let accountState;

// accountId = 2 // not allowed beacuse the const variable are not change the value
console.log(accountId);
accountName ="Rohit"
accountPass = "7507"
accountCity ="Pune"


// {} is called scope 
/*
perfer not to use var
because of issue in block scope and function scope

*/ 

//table used to stroe the value in table format
console.table([accountId,accountName,accountPass,accountCity,accountState])