const { ElementNotSelectableError } = require("selenium-webdriver/lib/error");

const users = [
  { name: "Anna", email: "anna@example.com" , role: "kokos"},
  { name: "Petr", email: "petr@example.com", role: "big boss"},
  {name: "Petr", email: "petr@example.com", role: "tester"},
  { name: "Jana", email: "jana@example.com", role: "huhak"},
  {name: "Lukáš", email: "lukas@example.com",role: "banan" }
];

console.log(users);
console.log(users[1]);
console.log(users[1].role);
// nebo
console.log(users[1]['role']);

users.forEach(user => {
  console.log(user.email);
});

users.forEach(deb => {
  console.log(deb.role);
});

// let nejakyUser = {}
// users.forEach(user => {
//   console.log(user.email, user.role);
//   nejakyUser = user
// });


// user.push 
users.push({ name: "Karel", 
    email: "karel@example.com", 
    role: "novacek" });

console.log(users);

users.forEach(user => {
  console.log(user.name);
});

const prvni = users.shift();
console.log("Smazán první uživatel:", prvni);

const posledni = users.pop();
console.log("Smazán poslední uživatel:", posledni);
console.table(users)
console.log(JSON.stringify(users, null, 2))

// Část	Význam
// users	To je ten vstupní objekt (pole uživatelů), který chceš převést
// null	To je replacer – funkce nebo pole pro výběr, co se má převést. Když je null, bere vše
// 2	To je odsazení (počet mezer na odsazení řádků), aby to bylo přehledné

let stringUsers = JSON.stringify(users);
console.log(stringUsers)

// PARSE
let backObjectUsers = JSON.parse(stringUsers);
console.log(backObjectUsers)
console.table(backObjectUsers)


const test = '[{"id":"1","name":"Google Pixel 6 Pro","data":{"color":"Cloudy White","capacity":"128 GB"}},{"id":"2","name":"Apple iPhone 12 Mini, 256GB, Blue","data":null},{"id":"3","name":"Apple iPhone 12 Pro Max","data":{"color":"Cloudy White","capacity GB":512}},{"id":"4","name":"Apple iPhone 11, 64GB","data":{"price":389.99,"color":"Purple"}},{"id":"5","name":"Samsung Galaxy Z Fold2","data":{"price":689.99,"color":"Brown"}},{"id":"6","name":"Apple AirPods","data":{"generation":"3rd","price":120}},{"id":"7","name":"Apple MacBook Pro 16","data":{"year":2019,"price":1849.99,"CPU model":"Intel Core i9","Hard disk size":"1 TB"}},{"id":"8","name":"Apple Watch Series 8","data":{"Strap Colour":"Elderberry","Case Size":"41mm"}},{"id":"9","name":"Beats Studio3 Wireless","data":{"Color":"Red","Description":"High-performance wireless noise cancelling headphones"}},{"id":"10","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"64 GB","Screen size":7.9}},{"id":"11","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"254 GB","Screen size":7.9}},{"id":"12","name":"Apple iPad Air","data":{"Generation":"4th","Price":"419.99","Capacity":"64 GB"}},{"id":"13","name":"Apple iPad Air","data":{"Generation":"4th","Price":"519.99","Capacity":"256 GB"}}]'
console.log(test);
parseTest = JSON.parse(test);

console.table(parseTest,["name", "id"])

// console.table(test.name)
// test.forEach(item => {
//   console.log(item.name);
// });