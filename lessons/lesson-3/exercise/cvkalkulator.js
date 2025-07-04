document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculatorForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
      result = "Zadej platná čísla!";
    } else {
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Nelze dělit nulou!";
          break;
        default:
          result = "Neznámý operátor";
      }
    }

    document.getElementById("vysledek").textContent = "Výsledek: " + result;
  });
});