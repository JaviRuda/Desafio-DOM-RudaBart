
//variables

let nomCliente = solicName();
let nomAventura = listAventura();
let precio = precioAventura(nomAventura);

primerCobro(nomAventura, precio, nomCliente);

let agregado = secondlistProduct();
let precio2 = precioSecondlist(agregado);

segundoCobro(agregado, precio2, nomCliente);


//nombre

function solicName() {
    alert("BIENVENIDO a 'Unikat' tus expertos en aventura");
    let nombre = prompt('Ingrese su nombre');
    while (nombre === '') {
        nombre = prompt('Ingrese su nombre');
    }
    alert("Listo para algo de aventura? " + nombre.toUpperCase())

    return nombre;
}

//Pregunta al cliente

function listAventura(){
    let aventura;
    do {    
     aventura = parseInt(prompt('Selecciona tu desafio: \n-1-Esqui\n-2- rafting\n-3-Paseo en lancha'))
} while (aventura < 1 || aventura > 3);
switch (aventura) {
    case 1:
        return 'Elegiste esqui, nos vemos en el cerro a las 9:00';
    case 2:
        return 'Elegiste rafting, nos vemos en el rio a las 9:00';
    case 3:
        return 'Elegiste paseo en lancha, nos vemos en el lago a las 9:00';
    }
}

//valor de cada aventura

function precioAventura(nomAventura) {

    if (nomAventura === 'Elegiste esqui, nos vemos en el cerro a las 9:00' ) { 
        return 15000;
    }else if (nomAventura ==='Elegiste rafting, nos vemos en el rio a las 9:00'){
        return 10000; 
    } else {
        return 20000; 
    }
}

//al momento de comprar

function primerCobro(producto,precio,nombre) {
    alert(
        nombre.toUpperCase() +
        ', elegiste : ' +
        producto +
        ' y tiene un costo de $ ' +
        precio + ' pesos');
        
} 

//segunda lista(no se creo que debe de haber otro modo de hacer esto)


function secondlistProduct() {
    alert(
        "Queres sumar algo mas?");
    let agregados;
    do {    
agregados = parseInt(prompt('Deseas agregar algo mas? : \n-1- Masajes\n-2- Sauna seco\n-3-Jacuzzi\n-4- nada me gusta'))
} while (agregados < 1 || agregados > 4);
switch (agregados) {
    case 1:
        return 'Tenes disponible a las 14:00 en el salon de masajes';
    case 2:
        return 'Tenes disponible a las 17:00 en el spa';
    case 3:
        return 'Tenes disponible a las 20:00 el jacuzzi';
    case 4:
        return 'No hay problema esperamos pronto tener opocines para vos.';
    }
}

//valor de cada producto2

function precioSecondlist(nombre2) {
    if (nombre2 === 'Tenes disponible a las 14:00 en el salon de masajes') {
        return 5000;
    }else if (nombre2 === 'Tenes disponible a las 17:00 en el spa') {
        return 3000; 
    }else if (nombre2 === 'Tenes disponible a las 20:00 el jacuzzi') {
        return 1500;
    } else {
        return 0; 
    }
}

//suma y cobro final

function segundoCobro(aventura2,precio2,nombre) {
    alert(
        nombre.toUpperCase() +
        ', Deseaste : ' +
        aventura2 +
        ' el costo es $ ' +
        precio2 + ' pesos');
    
    let cash = parseInt(prompt('con cuanto abonas? $ :'))
    if (cash > precio) {
        alert(nombre + " tu cambio es " + (cash - (precio + precio2)));
    } else if (cash < precio) {
        alert('haz ingresado un monto que no cubre el costo de la aventura, intentalo nuevamente');
        cash = parseInt(prompt('ingrese monto $ :'))
        alert(nombre + " tu cambio es " + (cash - (precio + precio2)));
    } 
    alert("GRACIAS POR PROGRAMAR TU AVENTURA" );
    }



