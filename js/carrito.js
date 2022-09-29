
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