function printHeight(height) {

  // TODO: Implementujte podmienku
  // Ak je vyska vacsia ako 180 cm tak som vysoky
  // Ak je vyska mensia ako 180 ale vacsia ako 170 cm tak som stredne vysoky
  // Ak je vyska mensia ako 170 ale vacsia ako 160 cm tak som nizky
  // Ak je vyska mensia ako 160 cm tak som malinky
  // TODO: Implementujte podmienky


  // Vypiste vysledok do span elementu s id heightStatus
  // TODO: Implementujte vypis do span elementu
}

function printCurrentDay() {
  // TODO: Vypiste aktualny den pomocou switch

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