function crearUsuario(nombre,email,edad,sexo,domicilio,barrio){
    const usuario = new NuevoUsuario (nombre,email,edad,sexo,domicilio,barrio);
    return usuario;
}

function cargarUsuario(usuario){
    usuarios.push(usuario);
}


informacionCompra = document.getElementById("informacionDeCompra__container")

const usuarios = [{nombre:"Juan Gonzalez",email:"juangonzales@hotmail.com",edad:29,sexo:"Masculino",domicilio: "juramento 2000",barrio: "Belgrano"},
{nombre:"Tomas Aparicio",email:"tomas.aparicio@gmail.com.ar",edad:17,sexo:"Masculino",domicilio: "Fray Luis Beltran 1050",barrio: "San Isidro"},
{nombre:"Lourdes James",email:"ljames@gmail.com",edad:25,sexo:"Femenino",domicilio: "libertador 1456",barrio: "Palermo"},
{nombre:"Manuela Simer",email:"simer-manuela@hotmail.com",edad:27,sexo:"Femenino",domicilio: "Uruguay 123",barrio: "San Isidro"},
{nombre:"Martin Gomez",email:"martagomez@hotmail.com",edad:32,sexo:"Masculino",domicilio: "25 de mayo 1456",barrio: "Microcentro"},
];



class NuevoUsuario{
    constructor(nombre,email,edad,sexo,domicilio,barrio){
        this.nombre = nombre;
        this.email = email;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.domicilio = domicilio;
        this.barrio = barrio;
    }
}

let ingreso=prompt("Presione Aceptar si quiere subscribirse o escriba ESC para salir")

if (ingreso != "ESC") {
    let nombre = prompt("Ingrese su nombre y apellido");
    let email = prompt("Ingrese su email");
    let edad = prompt("Ingrese su edad");
    let sexo=prompt("Ingrese Masculino o Femenino segun su sexo");
    let domicilio = prompt("Ingrese su domicilio");
    let barrio = prompt("Ingrese su barrio");

    cargarUsuario(crearUsuario(nombre,email,edad,sexo,domicilio,barrio));
    console.log(usuarios);
}



const hombres = usuarios.filter((el) => el.sexo.includes("Masculino"));
console.log(hombres);

const mujeres = usuarios.filter((el) => el.sexo.includes("Femenino"));
console.log(mujeres);

const emails = usuarios.map((el) => el.email);
console.log(emails);

const adolescentes = usuarios.filter((el) => (el.edad < 21));
console.log(adolescentes);

const jovenes = usuarios.filter((el) => (el.edad < 27));
console.log(jovenes);


const buscado = usuarios.find((el) => el.barrio === "Microcentro");
console.log(buscado);



const productos = [
    {id: 1, nombre: "Remera Activa 1", precio: 2800},
    {id: 2, nombre: "Remera Activa 2", precio:3200},
    {id: 3, nombre:"Remera Activa 3", precio: 3500},
    {id: 4, nombre: "Buzo Activa 1", precio: 6800},
    {id: 5, nombre:"Buzo Activa 2", precio:7500},
    {id: 6, nombre: "Buzo Activa 3", precio: 9800},
    {id: 7, nombre: "Perlas Activa", precio: 14700},
    {id: 8, nombre: "Colgante Activa", precio: 10000 },
];


const titulo = document.getElementById("titulo"),
cardsContainer = document.getElementById("cards__main__container");

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                            <p>Producto: ${producto.nombre} </p>
                            <b>$ ${producto.precio} </b>`;
    cardsContainer.appendChild(contenedor);
}

cardsContainer.className = "tipografiaCarrito";
titulo.className = "tipografiaCarrito";


const miCompra =[];


function IVA(numero){
    let resultado = numero * 1.21;
    return resultado;
}

function precioFinal(precio,cuotas){
    let resultado = precio + (precio * (0.05 * cuotas));
    return resultado.toFixed(2);
}

function pagoMensual(precio,cuotas){
    let resultado2 = precio / cuotas;
    return resultado2.toFixed(2);
}



let compraFinalizada = false;

while (compraFinalizada == false) {
    let producto = prompt("Ingrese el numero del producto que quiere agregar al carrito o 9 para salir: \n 1) Remera Activa 1 \n 2) Remera Activa 2 \n 3)Remera Activa 3 \n 4) Buzo Activa 1 \n 5) Buzo Activa 2 \n 6) Buzo Activa 3 \n 7)Perlas Activa \n 8)Colgante Activa \n 9) Salir");
    switch (producto) {
        case "1":
            alert("El producto seleccionado es Remera Activa 1, su precio es $2800");
            miCompra.push(productos.find((el) => el.id === 1));
            let continuarComprando = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";

                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }

            break;
        case "2":
            alert("El producto seleccionado es Remera Activa 2, su precio es 3200");
            miCompra.push(productos.find((el) => el.id === 2));
            let continuarComprando2 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando2) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
                break;
        case "3":
            alert("El producto seleccionado es Remera Activa 3, su precio es 3500");
            miCompra.push(productos.find((el) => el.id === 3));
            let continuarComprando3 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando3) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
            break;
        case "4":
            alert("El producto seleccionado es Buzo Activa 1, su precio es 6800");
            miCompra.push(productos.find((el) => el.id === 4));
            let continuarComprando4 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando4) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }

            break;
        case "5":
            alert("El producto seleccionado es Buzo Activa 2, su precio es 7500");
            miCompra.push(productos.find((el) => el.id === 5));
            let continuarComprando5 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando5) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
            break;
        case "6":
            alert("El producto seleccionado es Buzo Activa 3, su precio es 9800");
            miCompra.push(productos.find((el) => el.id === 6));
            let continuarComprando6 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando6) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
            break;
        case "7":
            alert("El producto seleccionado es  Perlas Activa, su precio es 14700");
            miCompra.push(productos.find((el) => el.id === 7));
            let continuarComprando7 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando7) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " +valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
            break;
        case "8":
            alert("El producto seleccionado es Colgante Activa, su precio es $10000");
            miCompra.push(productos.find((el) => el.id === 8));
            let continuarComprando8 = prompt("Presione: \n 1: Para seguir comprando \n 2: Para ir a pagar \n 3: Para salir");
            switch (continuarComprando8) {
                case "1":
                    compraFinalizada = false;
                    break;
                case "2":
                    const detallesDeCompra = miCompra.map((el) => el.nombre);
                    const totalDeCompra = miCompra.reduce ((acc,el) => acc + el.precio,0);
                    let valorTotalDeCompra = IVA(totalDeCompra);
                    let cuotas = "0";
                    
                    alert("Su carrito de compras esta compuesto por: \n" + detallesDeCompra);
                    alert("El valor total de la compra es de $" + valorTotalDeCompra);
                    cuotas = prompt("¿En cuántas cuotas quiere pagarlo? \n 1, 3, 6, 12, 18 o 24 \n Le informamos que cada cuota tiene un interes del 5% extra sobre el total");
                    switch (cuotas) {
                        case "1":
                            alert("El precio final que va a pagar será: " + valorTotalDeCompra);
                        break;

                        case "3":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "6":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "12":
                            alert("El precio final que va a pagar será:" + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "18":
                            alert("El precio final que va a pagar será: " + precioFinal(valorTotalDeCompra,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(valorTotalDeCompra,cuotas),cuotas));
                        break;

                        case "24":   
                            alert("El precio final que va a pagar será:" + precioFinal(precioRemera,cuotas));
                            alert("El costo de cada cuota es de: $" + pagoMensual(precioFinal(precioRemera,cuotas),cuotas));
                        break;

                        default:
                
                        break;
                    }

                    compraFinalizada = true;

                    break;
                case "3":
                        alert("¡Que tengas BUEN DÍA!"); 
                        compraFinalizada = true;
                        break;    
            
                default:
                    alert("La palabra ingresada no es valida, las opciones son:  1, 2 o 3");
                    break;
            }
            break;
        case "9":
            alert("¡Que tengas BUEN DÍA!");  
            compraFinalizada = true;  
            break;

            
    
        default:
            alert("El caracter ingresado no es valido");
            compraFinalizada = false;
            break;
    }
}

const informacionDeCompra = document.getElementById("informacionDeCompra__container");

for (const compra of miCompra) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h4>Producto en carrito: ${compra.nombre}`;
    informacionDeCompra.appendChild(contenedor);
}







