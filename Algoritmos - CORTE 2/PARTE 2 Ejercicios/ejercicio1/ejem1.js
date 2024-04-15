const denominations = [50000,20000,10000,5000, 2000, 1000]; // Se declara un array constante con el valor de las denominacioes de los billetes.

function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput);
} /* Se declara una función para obtener la cantidad a retirar por el usuario y se retorna, 
esta entrada se recibe como string y se usa parseFloat()
para que este valor sea tratado como un numero y no como un texto */


function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
} /* Calcula la cantidad de cada tipo de billete necesario,
utilizando el array declarado en la linea 1 y retorna la cantidad de billetes necesarios
para cada denominación */


function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
} /* Comprueba si la cantidad de retiro es válida, devolviendo
un true si la cantidad es un número positivo y false si es negativo */


function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
} /* Dirige el proceso de la transacción y muestra los avisos (alert)
para informar al usuario durante el proceso sobre el retiro y los billetes necesarios */


ATMTransaction();
// Se llama a la función y se ejecuta todo el código dentro de ella.