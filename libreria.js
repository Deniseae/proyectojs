//notificacion eliminar carrito
const vacio = document.getElementById("vaciarCarrito");
vacio.addEventListener("click", ()=> {
    swal.fire("Tu compra fue eliminada!") 
} );


/*const vacio= document.getElementById("vaciarCarrito");
vacio.addEventListener("click",() => {
    swal.fire({
        title: "estas seguro que deseas vaciar el carrito?",
        text: "una vez eliminado perderas tu compra!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("carrito eliminado", {
            icon: "success",
          });
        } else {
          swal("continua con tu compra");
        }
      });
})*/




 