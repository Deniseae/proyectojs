function solicitarNombre(){
    let nombreIngresado = prompt ("ingrese su nombre")
    console.log("Su nombre es "+ nombreIngresado)
 } 
 solicitarNombre()
 
let numeroConsulta= prompt("Es tu primera consulta? si/no")
    if (numeroConsulta == "si"){
    alert("Genial!! podes acceder a tu primer consulta GRATIS!");
}  else {
    alert("Gracias por elegirnos nuevamente!! Nos alegra muchisimo :)");
}
//constructor obj cursos
function Curso(precio, tipo, profesor, duracion){
this.precio = precio;
this.tipo = tipo;
this.profesor = profesor;
this.duracion = duracion;
}
const masajes = new Curso("8000","descontracturante","ludmila","5 meses");
const reflexologia = new Curso("5000","relajante","pedro","2 meses");
const alisados = new Curso("3000","peluqueria","micaela","4 clases");
console.log(masajes);
console.log(reflexologia);
console.log(alisados);

// Arrays
let servicios =['Pestañas','Masajes','Peluqueria','Uñas'];

console.log(servicios[0]);
console.log(servicios[1]);
console.log(servicios[2]);
console.log(servicios[3] = 'Manicura');
console.log(servicios.push ='Depilación');

//Descuento 15% off en la compra
function valorProductos(precio,descuento){
    let precioFinal = precio - (precio*descuento/100);
    return precioFinal;
}
let precio= parseInt(prompt("Ingrese el total de su compra para acceder al descuento"));
let valorVenta =  valorProductos(precio,15);
alert("Total de la compra con el 15% off"+ " " + valorVenta);

/*class clientes {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
    }
}

const listaClientes = JSON.parse(localStorage.getItem("clientes")) || [];

const nuevoCliente = () => {
    let nombre = prompt("Escriba su nombre");
    let edad = prompt("Que edad tiene?");
    let contacto = prompt("Por que medio nos contacto?");

    let mascota = new Cliente (nombre, edad, contacto);
    listaMascotas.push(clientes);
    localStorage.setItem("clientes",JSON.stringify(listaClientes))
}*/