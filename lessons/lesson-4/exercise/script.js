// Vytvorte pole users, ktoré bude obsahovať zoznam používateľov. Každý user bude mať nasledovné 
// vlastnosti: meno, email, role (admin, user)

// const users = [
//     { meno: 'Peter', email: 'email@email.com', role: ['admin', 'user'] },
//     { meno: 'Jozef', email: 'dalsi@mail.com', role: ['user, admin'] },
//     { meno: 'Mária', email: 'maria@email.com', role: ['user'] },
// ]

// // // // Vypiste pole users do konzoly
// // // console.log(users)
// // // // Vypiste meno prveho pouzivatela
// // // console.log(users[0].meno)
// // // console.log(users[0]['meno'])

// // // Vypiste len emaily vsetkych pouzivatelov
// // // Vypiste len pouzivatelov, ktori maju rolu admin
// // let nejakyUser = {}
// // users.forEach((user) => {
// //     // console.log(user.email, user.meno)
// //     // nejakyUser = user

// //     if (user.role.includes('admin')) {
// //         console.log(user.meno, user.email);
// //     }
// // })
// // console.log(nejakyUser);


// // // Pridajte do pola users 1 nového usera  
// // const newUser = {}
// // users.push(newUser)


// // users.push({})


// // // Odstráňte z pola users 1 usera, posledneho
// // users.pop()

// console.log(users)
// let parsedUsers = JSON.stringify(users)
// console.log(parsedUsers)

// let newUsers = JSON.parse(parsedUsers)
// console.log(newUsers[0].meno)


// Vytvorte objekt PRODUCT, ktory bude mat nasledovne vlastnosti: id, nazov, cena, mnozstvo

// Vytvorte pole products, ktore bude obsahovat zoznam produktov

// Zmente ceny prveho produktu v poli products na 100


//const products = fetch('https://api.restful-api.dev/objects').then(response => response.json()).then(data => console.log(data))
//console.log(products);
const response = '[{"id":"1","name":"Google Pixel 6 Pro","data":{"color":"Cloudy White","capacity":"128 GB"}},{"id":"2","name":"Apple iPhone 12 Mini, 256GB, Blue","data":null},{"id":"3","name":"Apple iPhone 12 Pro Max","data":{"color":"Cloudy White","capacity GB":512}},{"id":"4","name":"Apple iPhone 11, 64GB","data":{"price":389.99,"color":"Purple"}},{"id":"5","name":"Samsung Galaxy Z Fold2","data":{"price":689.99,"color":"Brown"}},{"id":"6","name":"Apple AirPods","data":{"generation":"3rd","price":120}},{"id":"7","name":"Apple MacBook Pro 16","data":{"year":2019,"price":1849.99,"CPU model":"Intel Core i9","Hard disk size":"1 TB"}},{"id":"8","name":"Apple Watch Series 8","data":{"Strap Colour":"Elderberry","Case Size":"41mm"}},{"id":"9","name":"Beats Studio3 Wireless","data":{"Color":"Red","Description":"High-performance wireless noise cancelling headphones"}},{"id":"10","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"64 GB","Screen size":7.9}},{"id":"11","name":"Apple iPad Mini 5th Gen","data":{"Capacity":"254 GB","Screen size":7.9}},{"id":"12","name":"Apple iPad Air","data":{"Generation":"4th","Price":"419.99","Capacity":"64 GB"}},{"id":"13","name":"Apple iPad Air","data":{"Generation":"4th","Price":"519.99","Capacity":"256 GB"}}]'
console.log(response)
let products = JSON.parse(response)
console.log(products[0].name)

<<<<<<< HEAD
// const products = JSON.parse(response);
// console.log(products[0]);

const pole = ["mrkooooo", "bubak", "kacer"];

pole.forEach((parametrvypis) => {
  console.log(parametrvypis);
});

const osoba = {
  jmeno: "Marketa",
  prijmeni: "Horak",
  zavislost: "kava", 
  adresa: {
    mesto: "strasidlakov",
    ulice: "bubakov",
    cislo: 47
  },
  telefon: "+420 602 345 678",
  email: "marketa.horak@email.cz"
};

// Výpis do konzole
console.log(`
OSOBA:
Jméno:      ${osoba.jmeno}
Příjmení:   ${osoba.prijmeni}
Závislost:  ${osoba.zavislost}
Adresa:     ${osoba.adresa.ulice} ${osoba.adresa.cislo}
Telefon:    ${osoba.telefon}
Email:      ${osoba.email}
`);
=======






// // console.log(JSON.parse(response));

// // const products = JSON.parse(response);
// // console.log(products[0]);



// const pole = ['item1', 'prvok2', 2, true, undefined]

// const inepole = new Array('item1', 'prvok2', 2, true, undefined)



// // console.log(userNames)

// userNames.push('Peter')

// // console.log(userNames)

// // userNames.pop()

// // console.log(userNames)

// userNames.forEach((meno) => {
//     console.log(meno.toUpperCase())
// })

// for (let i = 0; i < userNames.length; i++) {
//     console.log(userNames[i])
// }


// const user = {
//     name: 'Peter',
//     priezvisko: 'Zosiak',
//     vek: 38,
//     prax: ['JavaScript', 'HTML', 'CSS'],
//     adresa: {
//         ulica: 'Hlavná',
//         mesto: 'Bratislava',
//         psc: '81101'
//     }
// }

// // const userNames = ['Jozef', 'Mária', 'Peter', 'Anna']
// // console.log(userNames[0])

// console.log(user['name'])
// console.log(user.name)
// console.log(user.adresa.mesto);
>>>>>>> upstream/main
