
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303]; // Se declara un array constante con el numero de habitaciones.
const roomStatus = Array(10).fill(false); // Se crea un array con 10 elementos que toman el valor FALSE
const roomReservations = {}; // Se crea un objeto VACIO de las habitaciones reservadas


const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
}; /* Reserva una habitación específica con el nombre del usuario en caso de estar disponible
y si la habitación ya está reservada o el número de habitación no es válido entonces muestra un aviso de alerta */



const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
}; /* Desocupa una habitación específica si está reservada y si la habitación ya está desocupada,
muestra un aviso diciendo que ya está desocupada. */



const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
}; /* Esta función filtra las habitaciones y muestra los numeros disponibles y si no llegan a ver,
entonces muestra un aviso diciendo que no hay habitaciones diponibles */


const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
}; // Muestra el numero de cuantas habitaciones estan disponibles y cuantas estan reservadas




/* Le da la posibilidad al usuario de reservar, liberar, consultar una habitación y salirse del programa
cada caso tiene da una respuesta según la opción seleccionada por el usuario */
const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } 
        else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break; /* En caso de seleccionar 1 (reservar una habitación), solicita al usuario el número de habitación y en caso de
        que SI este dentro del array rooms y sea un valor numerico, reservara la habitación con su nombre y numero de habitacion
        y en caso de que el numero de habitación NO, muestra un aviso diciendo "numero de habitacion invalido" */


      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break; /* En caso de seleccionar 2, se le pide al usuario el numero de habitación que quiere liberar y si esta dentro del array rooms disponibles y
        es un valor numerico, entonces liberara la habitación y en caso de que no, entonces mostrara una alerta de
        "Número de habitación inválido. Intente de nuevo" */


      case '3':
        showOccupancy();
        break; // Si el usuario selecciona 3, el programa mostrara la ocupación de las habitaciones.


      case '4':
        alert('Saliendo...');
        break; // Si el usuario selecciona 4, el programa mostrara un aviso indicando que esta saliendo.


      default:
        alert('Opción inválida. Intente de nuevo.');
        break; // Y si el usuario no selecciona ninguna de las opciones, entonces mostrara un aviso diciendole "opción invalida, intente de nuevo"
    }

  } while (userInput !== '4'); /* Aqui se repite el bucle mientras userInput sea diferente de 4, osea que significa que el bucle se ejecutara
  hasta que el usuario elija la opción de salir */
}; 


handleUserInput();
// Permite iniciar y/o para mandar a llamar la función para ver y cumplir su funcionamiento.