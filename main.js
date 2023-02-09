/*function solicitarNombre(){
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
alert("Total de la compra con el 15% off"+ " " + valorVenta);*/

class clientes {
    constructor(nombre, genero, edad) {
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
    }
}

const listaClientes = JSON.parse(localStorage.getItem("clientes")) || [];

const nuevoCliente = () => {
    let nombre = prompt("Escriba su nombre");
    let edad = prompt("Que edad tiene?");
    let contacto = prompt("Por que medio nos contacto?");

    let cliente = new Cliente (nombre, edad, contacto);
    listaClientes.push(clientes);
    localStorage.setItem("clientes",JSON.stringify(listaClientes))
}
class Producto{
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}
/**carrito de compras **/
const hidratante = new Producto (1,"Crema hidratante enzimatica",2000,"img/crema.png");
const antiage = new Producto(2," Crema Antiage",6000,"img/antiage.png");
const limpieza = new Producto (3,"Gel de limpieza con vitamina C", 3600, "img/geldelimpieza.png");
const reparadora = new Producto (4, "Crema con Vitamina C", 2700,"img/vitaminac.png");
const serum = new Producto (5, "Serum hidratacion intensiva", 4000,"img/serum.png");
const hyaluronico = new Producto(6, "Crema con Hyaluronico B5",3600, "img/hyaluronico.png");
const pestañas = new Producto(7,"Lash Pro",800, "img/pestañas.png");
const exfoliante = new Producto(8,"Exfoliante enzimatico", 1500, "img/exfoliante.png");

//arrays
const productos =[hidratante, antiage , limpieza, reparadora, serum, hyaluronico, pestañas, exfoliante];

//array del carrito
let carrito = [];
/**carga de carrito**/
if(localStorage.getItem("carrito")){
    carrito =JSON.parse(localStorage.getItem("carrito"));
}

//modificacion de DOM
 const contenedorProducto = document.getElementById("contenedorProductos");

 //funcion muestra productos

 const mostrarProductos =() => {
    productos.forEach( producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","colxs-12");
        card.innerHTML =`
        <div class="card">
            <img src="${producto.img}"class="card-img-top imgProductos" alt="${"producto.nombre"}>
            <div class = "card-body">
                <h5>${producto.nombre} </h5>
                <p> ${producto.precio} <p>
                <button class="btn colorBoton" id="boton${producto.id}"> Añadir al carrito </button>
            </div>
        </div>
                    `
        contenedorProducto.appendChild(card);            
        
        //añadir productos al carrito
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click",() => {
            agregarAlCarrito(producto.id);
        })
    })
 }
 mostrarProductos();

 //funcion agregar al carrito
 const agregarAlCarrito =(id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else{
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
        //localStorage
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    calcularTotal();
 }

 //ver el carrito

 const contenedorCarrito = document.getElementById("contenedorCarrito");
 const verCarrito =document.getElementById("verCarrito");
 
 verCarrito.addEventListener("click",() => {
    mostrarCarrito();
 })

 //funcion para mostrar carrito
 const mostrarCarrito = () => { 
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => { 
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","colxs-12");
        card.innerHTML =`
            <div class="card">
                <img src="${producto.img}"class="card-img-top imgProductos" alt="${"producto.nombre"}>
                <div class = "card-body">
                    <h5>${producto.nombre} </h5>
                    <p> ${producto.precio} <p>
                    <p> ${producto.cantidad} <p>
                    <button class="btn colorBoton" id="eliminar${producto.id}"> Eliminar Producto </button>
                </div>
            </div>
                    `
        contenedorCarrito.appendChild(card);

        //Vaciar carrito
        const boton =document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click",() =>{
            eliminarDelCarrito(producto.id);
        })

    })
    calcularTotal();
 }
 //función que elimina el producto del carrito
 const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();
    //localStorage
    localStorage.setItem("carrito",JSON.stringify(carrito));
 }  
// vaciar carrito completo
const vaciarCarrito =document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click",() =>{
    eliminarTodoElcarrito();
})

//funcion que elimina todo del carrito
const eliminarTodoElcarrito = () => {
    carrito= []
    mostrarCarrito();
    //localStorage
    localStorage.clear();
}
//total de la compra
const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
    })
    total.innerHTML =`Total: $${totalCompra}`;
}

