/*
1. vytvorte globalnu premennu
2. vytvorte funkciu, s 2 parametrami
3. vytvorte vnutornu funkciu, ktora vytvorti premennu X, vypise hodnoty premnenej X,
  parametre nadradenej funckie, a globalnuy premennu
4 v nadradenej funkcii vytvorte podmienku, ktora vytvori premennu Y,
  a vypise hodnotu tejto premennej
5. vytvortne arrow funkciu, ktora vrati hodnotu stringu a vypise do console */


const globalnaPremenna = "Som globálna!"

const arrrowFunkcia = (parameter1, parameter2) => {
  const vnutornaFunkcia = () => {
    const X = "Ja som vo vnutornej funkcii"
    console.log(X)
    console.log(parameter1)
    console.log(parameter2)
    console.log(globalnaPremenna)
  }
  vnutornaFunkcia()

  if (true) {
    const Y = "Ja som bloková premenná"
    console.log(Y)
    console.log(parameter1)
    console.log(parameter2)

  }
  return 'Bla bla bla'

}

const vysledok = arrrowFunkcia("parameter1", "parameter2")
console.log(vysledok);

<<<<<<< HEAD
  const den = 'Úterý'


  switch (den) {
    case "Neděle":
      console.log ('Neděle');
      break;
    case "Pondělí":
      console.log ( 'Pondělí');
      break;
    case "Úterý":
     /*  console.log ('Úterý'); */
      break;
  case "Středa":
      console.log ('Středa');
      break;
      
      
   /*     'Středa';
      break;
    case :
      den = 'Čtvrtek';
      break;
    case :
      den = 'Pátek';
      break;
    case :
      den = 'Sobota';
      break; */
    default:
     console.log ( 'Neznámý den');
  }

  console.log('Dnes je: ' + den);
}

printCurrentDay();

/* const today = new Date().getDay(); */

function printNumbersFrom1To100() {

for(let i=1; i<=100; i++){
  console.log (i);}
  // Vypiste vsetky cisla od 1 do 100
  // TODO: Implementujte cyklus
}

function printOnlyEvenNumbersFrom1To100() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printOnlyEvenNumbersFrom1To100();





  // Vypiste len parne cisla od 1 do 100
  // TODO: Implementujte cyklus a podmienku

  // TODO: Implementujte vypis do span elementu s id onlyEvenNumbers


printHeight(190)
printNumbersFrom1To100()
printOnlyEvenNumbersFrom1To100()
=======
>>>>>>> upstream/main
