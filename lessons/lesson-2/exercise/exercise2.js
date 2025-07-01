
let name = "kokos";
let pravda = true;
let cislo = 2;
let bubak;

console.log(name, pravda, cislo)
/* typeof name; */
console.log (typeof pravda)
console.log (typeof koko)
console.log (typeof bubak)
let x = 3;

x=x+1;
console.log(x)
let y = 10;
let o = 2;
console.log(y+o);
console.log(y%o);
console.log(y==o);

let prvni = 666;
let druhy = 661;


console.log(prvni==druhy);
console.log(prvni===druhy);
druhy++;
console.log(druhy);

/* let volby = "nenen"

if (volby == "svobodne"){
    document.write("hahaha demokracie");
    pokracovat = true;
}
else {
    document.write("Máme diktaturu"); pokracovat = false;
}



function pozdrav() { document.write("Ahoj, vřele tě tu vítám!"); } pozdrav(); */


let cisloVyska = 174; 
/* let cisloVyska = 180; */
let vyska = Number(cisloVyska);

if (isNaN(vyska) || vyska <= 0) {
  console.log("Zadej prosím platnou číselnou výšku a laskavě nepiš kraviny a nečum");
}
if (vyska <= 150) {
  console.log("liliput");
} else if (vyska > 150 && vyska <= 168) {
  console.log("jez hodně špenátu");
} else if (vyska >= 169 && vyska <= 174) {
  console.log("...ale jo, baštil si hodně");
} else if (vyska >= 175) {
  console.log("jo pecka, normální humanoid");
}