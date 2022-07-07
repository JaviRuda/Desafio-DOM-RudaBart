/* 
    Para identificar mejor las variables y cancelarlas me parece comodo este metodo combinandolo con CamelCase.:
        i = int
        f = float
        s = string
        a = arrays
*/

let iAventuraSelected = NaN;
let iTotal = 0;
let iContinue;

// Constantes de aventuras
const aOptionsAve = [ "trekking", "esqui", "lancha" ];
const aPriceAve = [ 3000, 18000, 25000 ];

// Esta función se ejecutará al hacer click en el botón "Reservar" gracias al evento onClick
// Prompt con datos recibidos del bucle FOR con los datos en él.
function buyAventura() {
    let sOptions = "";
    
    for(let i = 0; i < aOptionsAve.length; i++) {
        sOptions += aOptionsAve[i].toUpperCase() + " ($" + aPriceAve[i] + ")\n";
    }

    const optSelected = prompt("Elegiste la aventura:\n\n" + sOptions).toLowerCase();

    if(aOptionsAve.includes(optSelected)) {
        buyOptSelected(aOptionsAve.indexOf(optSelected));
    } else if(optSelected != null) {
        alert("ERROR: Ingresa una aventura válida!");
        buyAventura();
    }
}

// En caso de que el usuario ingrese una opción válida llamamos a esta función que le preguntará si desea seguir comprando y llamaremos a la función totalBuy con cada compra.
function buyOptSelected(option) {
    iContinue = parseInt(prompt("Elegiste la aventura " + aOptionsAve[option].toUpperCase() + " el costo es de $" + aPriceAve[option] + "\n¿Desea seguir sumando aventura? \n\n1. Si \n2. No"));
    totalBuy(aPriceAve[option]);

    switch(iContinue) {
        case 1:
            alert("Por ahora tus aventuras tienen un costo de: $" + totalBuy());
            buyAventura();
            break;
        case 2:
            alert("Gracias por la confianza! El total es: $" + totalBuy());
            iTotal = 0;
            break;
        default:
            alert("ERROR: No seleccionaste nada! Tu compra se canceló.");
            iTotal = 0;
            break;
    }
}

// En esta función vamos obteniendo el total de lo que lleva gastando el cliente utilizando la variable iTotal.
function totalBuy(valor) {
    if(isNaN(valor)) { valor = 0; }

    iTotal += valor;

    return iTotal;
}

//Carrito Modelo base ejemplo brindado.

//Primero hay que declarar los productos.
let productos = [
    {
      id: 1,
      nombre: "Descenso X-tremo",
      precio: 10000,
      imagen: "/images/portfolio/portfolio-1.jpg",
    },
    {
      id: 2,
      nombre: "Escalada (solo en verano)",
      precio: 8500,
      imagen: "/images/portfolio/portfolio-2.jpg",
    },
    {
      id: 3,
      nombre: "Kite Surf (sujeto a condiciones meteorológicas)",
      precio: 1900,
      imagen: "/images/portfolio/portfolio-3.jpg",
    },
    {
      id: 4,
      nombre: "Trekking",
      precio: 3500,
      imagen: "/images/portfolio/portfolio-4.jpg",
    },
    {
      id: 5,
      nombre: "Dia de Esqui",
      precio: 20000,
      imagen: "/images/portfolio/portfolio-5.jpg",
    },
    {
      id: 6,
      nombre: "Vuelos en aladelta (sujeto a condiciones meteorológicas)",
      precio: 14500,
      imagen: "/images/portfolio/portfolio-6.jpg",
    },
    {
      id: 7,
      nombre: "Rafting",
      precio: 7500,
      imagen: "/images/portfolio/portfolio-7.jpg",
    },
    {
      id: 8,
      nombre: "Traslados de hasta 50km",
      precio: 5000,
      imagen: "/images/portfolio/portfolio-9.jpg",
    },
  ];
  
  // Luego una vez generados los ID's estos son seleccionados unoa uno por la const que precede.

  const contenedor = document.getElementById("container");
  
  // Para recorrer el array se usa un for Each siendo esta el metodo que recibe
// como parametros los descripciones de la funcion flecha ejecutando el parametro que el array manda y dibujando como por arte de magia una card por cada repeticion

  productos.forEach((producto, indice) => {
    // y asi es creada la card.
    let card = document.createElement("div");
   
    card.classList.add("card", "col-sm-12", "col-lg-3");
    // a card le agrego el contenido html de la card, accediendo a los datos del array de objetos.
    card.innerHTML = `
      <img src="${producto.imagen}" class="card-img-top" , "img-responsive" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#cart" class="btn btn-primary" onClick="comprar(${indice})" >Comprar</a>
      </div>
        `;
    // a la variable contenedor donde tengo capturado el div contenedor le agrego
    // la card que construi
    contenedor.appendChild(card);
  });
  
  const comprar = (indice) => {
    alert(`elegiste el ${productos[indice].nombre}`);
  };
  //capturo el boton x id y le agrego el evento asociado directamente
//a una funcion de flecha

let boton2 = document.getElementById("button"); //capturo el boton
boton2.onclick = () => { 
  let ele1 = document.getElementById("seguridad"); //capturo el elemento
  let precio1 = parseInt(ele1.options[ele1.selectedIndex].value); //capturo el valor del elemento
  let ele2 = document.getElementById("aventura");   
  let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
  let ele3 = document.getElementById("hospedaje");
  let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);
  let suma = `Total $ ${precio1 + precio2 + precio3}`;
  document.getElementById("resultado").value = suma;
};
