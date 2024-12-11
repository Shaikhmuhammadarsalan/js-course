const accountId = 2468;
let accountEmail = 'muhammad.shaikharsalan@gmail.com';
var accountPassword = "123456789";
accountCity = "Karachi";
let accountState;

// accountId = 5;

console.log(accountId);

accountEmail = 'muhammadarsalan@gmail.com';

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
accountState = "Korangi";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/