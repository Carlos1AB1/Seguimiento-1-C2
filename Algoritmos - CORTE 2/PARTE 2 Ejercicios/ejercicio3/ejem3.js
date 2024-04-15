
const sala1 = Array(10).fill(false); 
const sala2 = Array(10).fill(false); 
// Se crea un array en la sala 1 y 2, cada uno con 10 elementos que toman el valor FALSE

function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
} // Permite ver la disponibilidad de los asientos en la sala 1 y 2

function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
} /* Permite reservar asiento en las salas y verifica si el asiento esta disponible en esa sala,
y si esta disponible se reserva y muestra un aviso aceptando la reserva */


function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
} /* Muestra cuantos asientos disponibles hay en una sala espesifica y seleccionada,
filtra los asientos disponibles y si hay asientos libres, muestra el numero de asientos libres en la sala
y muestra un aviso para difrutar la pelicula y si todos los asientos están ocupados,
muestra un aviso que dice que no hay asientos disponibles. */



function verBalance() {
const boleta = 15900

  let dineroRecaudadoSala1 = sala1.filter(function(asiento) {
    return asiento
  }).length * boleta

  let dineroRecaudadoSala2 = sala2.filter(function(asiento) {
    return asiento
  }).length * boleta


  let totalDineroRecaudado = dineroRecaudadoSala1 + dineroRecaudadoSala2

  alert("El total de dinero recaudado en sala 1 es de: $" + dineroRecaudadoSala1)
  alert("El total de dinero recaudado en sala 2 es de: $" + dineroRecaudadoSala2)
  alert("El total de dinero recaudado en general es de: $" + totalDineroRecaudado)
} /* Esta función que agregue calcula y muestra el total de dinero recaudado en cada sala,
asi como el total en general, tambien integre esta nueva función en el menú principal del programa,
de modo que los usuarios pueden acceder a ella */



while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción: Bienvenido a la sala de cine" + " \nSelecciona una opción:" + "1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento" + " 3. Ver ocupación sala" + " 4. Ver total de dinero recaudado " + " 5. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance()
        break;
    case "5":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
} /* Es un bucle infinito que muestra un aviso de bienvenida a la sala de cine y luego pide al usuario que ingrese una opción, 1, 2, 3 o 4,
segun la opcion seleccionada se da respuesta a función la correspondiente y si el usuario selecciona la opción de 4 de salir,
el programa da un aviso despidiendose y termina, y si escribe un numero incorrecto a las opciones,
muestra un aviso diciendo "Opción invalidda. Intenta de nuevo" */