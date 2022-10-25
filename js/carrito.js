carrito = JSON.parse(localStorage.getItem("carrito"))

function recuperoCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let tabla = document.querySelector("tbody")
        carrito.forEach(prod => {
            let fila = `<tr>
                            <td>${prod.nombre}</td>
                            <td>${prod.precio}</td>
                            <td><button id="btn${prod.id}">-</button></td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}

recuperoCarrito()


const cotizar = document.querySelector("#cotizar")

const load = document.querySelector("#load")

const loading = ()=> swalerttwo(`<img src="images/load.gif" alt="loading" width="70px">`)

function cotizo(){
    load.innerHTML = loading() 
    setTimeout(() => {

    let total = carrito.reduce((acumulador, producto)=>  acumulador + producto.precio, 0)
        console.log("Total del carrito:", total)
            
    let cuotas = parseInt(prompt("Ingrese cantidad de cuotas entre 1 y 12"))
    let result1 = total / cuotas
    let result2 = total * 1.25 / cuotas
    let result3 = total * 1.50 / cuotas

    if (cuotas >= 1 && cuotas <= 3){
        swalert("Su pago es de "+cuotas+" cuotas a $"+result1.toFixed(2), "info")
    } else if (cuotas >= 4 && cuotas <= 6){
        swalert("Su pago es de "+cuotas+" cuotas a $"+result2.toFixed(2), "info")
    } else if (cuotas >= 7 && cuotas <= 12){
        swalert("Su pago es de "+cuotas+" cuotas a $"+result3.toFixed(2), "info")
    }else {
        swalert("⛔Cantidad de cuotas no validas⛔", "error")
    }
        }, 2000);
}


cotizar.addEventListener("click", ()=> {
    cotizo()
})


//LIBRERIAS SWEET ALERT

const swalert = (mensaje, icono)=> {
    Swal.fire({
        icon: icono,
        title: mensaje,
        padding: "5rem",
        width: "80%",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
    })
} 

const swalerttwo = ()=>{
    Swal.fire({
    title: 'Wait please...',
    imageUrl: 'images/load.gif',
    showConfirmButton: false,
    width: "80%",
    padding: "5rem",
    allowOutsideClick: false,
    timer: 1900
})
}

const precioTotal = ()=> {
    let total = carrito.reduce((acumulador, producto)=>  acumulador + producto.precio, 0)
    preciototal.innerHTML = total
}

precioTotal()


// function eventoEnBotones() {
//     produ.forEach(prod => {
//         const btn = document.querySelector(`#btn${prod.id}`)
//               btn.removeEventListener("click", `${prod.id}`)
//     })
// }
// eventoEnBotones()

// function agregarAlCarrito(id) {
//     const producto = produ.find(prod => prod.id == id)
//     carrito.push(producto)
//     console.table(carrito)
//     localStorage.setItem("carrito", JSON.stringify(carrito))
// }