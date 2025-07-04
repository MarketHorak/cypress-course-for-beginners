const kalkulacka = (cislo1, cislo2, operace) => {
  let vysledek;

  switch (operace) {
    case '+':
      vysledek = cislo1 + cislo2;
      break;
    case '-':
      vysledek = cislo1 - cislo2;
      break;
    case '*':
      vysledek = cislo1 * cislo2;
      break;
    case '/':
      if (cislo2 !== 0) {
        vysledek = cislo1 / cislo2;
      } else {
        return 'Chyba: nelze dělit nulou!';
      }
      break;
    default:
      return 'Neznámá operace';
  }

  return `Výsledek:`+ vysledek;
};

// Zde doplň čísla a operaci:
// let cislo1 = 10;
// let cislo2 = 0;
// let operace = '/';
// console.log(kalkulacka(cislo1, cislo2, operace));

// let globalni = "nazdar";
// function parametry (x,y) {
//     console.log("nevim")
//     function streva(aa) {
//         let aa="tenke strevo"
//         console.log()
//     }

// 
const pole = ["kokos", "bubak", "kacer"];

pole.forEach((parametrvypis) => {
  console.log(parametrvypis);
});

