/* AUN TENGO MUCHAS CONFUSIONES PERO TRATE DE APLICAR LO QUE VIMOS EN EL AFTER Y QUIZAS HAYA OTRA FORMA DE HACER LO QUE HICE PERO NO SE COMO JAJA */

//SIMULADOR INTERACTIVO DE COMIDA RAPIDA

//nombre

function solicName() {
    alert("BIENVENIDO a 'BamBoo' fast food");
    let nombre = prompt('Ingrese su nombre');
    while (nombre === '') {
        nombre = prompt('Ingrese su nombre');
    }
    alert("hora de saciar el hambre 😋 " + nombre.toUpperCase())

    return nombre;
}

//primera LISTA

function listProduct(){
    let producto;
    do {    
     producto = parseInt(prompt('Elige tu Combo favortito : \n1) Combo Gloton (burguer two)\n2) Combo Estudiante (burguer,papas,bebida)\n3) Salchipapa a lo pobre'))
} while (producto < 1 || producto > 3);
switch (producto) {
    case 1:
        return 'Combo Gloton (burguer two)';
    case 2:
        return 'Combo Estudiante (burguer,papas,bebida)';
    case 3:
        return 'Salchipapa a lo pobre';
    }
}

//valor de cada producto

function precioProduct(nombre) {

    if (nombre === 'Combo Gloton (burguer two)') {
        return 6000;
    }else if (nombre === 'Combo Estudiante (burguer,papas,bebida)') {
        return 5590; 
    } else {
        return 2990; 
    }
}

//primer monto a cobrar

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
        "CON ESO NO TE VAS A LLENAR 😐");
    let agregados;
    do {    
     agregados = parseInt(prompt('Deseas agregar algo mas? : \n1) porcion de papas\n2) una hamburguesa\n3) bebida\n4) nada ando misio 😕'))
} while (agregados < 1 || agregados > 4);
switch (agregados) {
    case 1:
        return 'porcion de papas';
    case 2:
        return 'una hamburguesa';
    case 3:
        return 'bebida';
    case 4:
        return 'nada ando misio 😕';
    }
}

//valor de cada producto2

function precioSecondlist(nombre2) {
     if (nombre2 === 'porcion de papas') {
        return 2000;
    }else if (nombre2 === 'una hamburguesa') {
         return 2999; 
    }else if (nombre2 === 'bebida') {
        return 1599;
    } else {
        return 0; 
    }
}
 
//suma y cobro final

function segundoCobro(producto2,precio2,nombre) {
    alert(
        nombre.toUpperCase() +
        ', agregaste : ' +
        producto2 +
        ' por lo tanto cuesta $ ' +
        precio2 + ' pesos');
    
    let cash = parseInt(prompt('ingrese monto $ :'))
    if (cash > precio) {
        alert(nombre + " tu vuelto es " + (cash - (precio + precio2)));
    } else if (cash < precio) {
        alert('NO TE ALCANZA ingresa un nuevo monto')
        cash = parseInt(prompt('ingrese monto $ :'))
        alert(nombre + " tu vuelto es " + (cash - (precio + precio2)));
    } 
    alert('GRACIAS POR TU VISITA VUELVE PRONTO 😋');
    }


//variables

let nomCliente = solicName();
let nomProducto = listProduct();
let precio = precioProduct(nomProducto);

primerCobro(nomProducto, precio, nomCliente);

let agregado = secondlistProduct();
let precio2 = precioSecondlist(agregado);

segundoCobro(agregado, precio2, nomCliente);

