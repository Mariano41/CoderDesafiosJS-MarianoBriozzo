//VARIABLES

const IVA = 1.21
const creoID = ()=> parseInt(Math.random() * 1000000)
const produ = [] 
let carrito = []

//CLASES PARA PRODUCTOS

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
    }
    precioFinal() {
        return parseFloat((this.precio * IVA).toFixed(2))
    }
}

//ARRAYS PARA CLASE PRODUCTOS

function generadorProdu() {
    produ.push(new Producto(899656, "GUITARRA ELECTRICA", 50000, "GUITARRA"))
    produ.push(new Producto(566988, "GUITARRA CRIOLLA", 25000, "GUITARRA"))
    produ.push(new Producto(774554, "GUITARRA ELECTRO ACUSTICA", 30000, "GUITARRA"))
    produ.push(new Producto(325326, "FUNDA", 4000, "ACCESORIO"))
    produ.push(new Producto(201254, "AFINADOR", 1000, "ACCESORIO"))
    produ.push(new Producto(980506, "PUAS", 900, "ACCESORIO"))
    produ.push(new Producto(775850, "CUERDAS", 1500, "ACCESORIO"))
}

// function generarCarrito() {
//     carrito.push(new Producto(899656, "GUITARRA ELECTRICA", 50000, "GUITARRA"))
//     carrito.push(new Producto(325326, "FUNDA", 4000, "ACCESORIO"))
//     carrito.push(new Producto(775850, "CUERDAS", 1500, "ACCESORIO"))
// }

// generarCarrito()
generadorProdu()


//FUNCIONES 

function agregarProdu() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseFloat(prompt("Ingresa el precio del producto:"))
    const prod = {id: id, nombre: nombre, precio: precio}
        produ.push(prod)
        console.table(produ)
}

function listarProductos() {
    produ.forEach((producto)=> {
        console.log(producto)
    })
}

function buscarProdu() {
    let nombreProdu = prompt("¿Que producto estas buscando?").toUpperCase()
    let resultado = produ.find((producto) => producto.nombre.includes(nombreProdu))
        if (resultado === undefined) {
             console.warn("No se encontro ningun producto con este nombre")
         } else {
             console.log(resultado)
    }
}

// function filtrarProdu() {
//     let filtro = prompt("Ingresa un filtro de lo que estas buscando:")
//     let resultado = produ.filter((producto) => producto.nombre.includes(filtro))
//         console.table(resultado)
// }

function existeProducto() {
    let codigo = parseInt(prompt("Ingrese el codigo (o ID) del producto:"))
    let existe = produ.some((producto)=> producto.id === codigo) 
            if (existe) {
            console.log("El código ingresado sí existe") 
        } else {
            console.warn("No se encontró ningun producto con ese código")
        }
} 

function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto)=>  acumulador + producto.precio, 0)
        console.log("Total del carrito:", total)
        
let cuotas = parseInt(prompt("Ingrese cantidad de cuotas entre 1 y 12"))
let result1 = total / cuotas
let result2 = total * 1.25 / cuotas
let result3 = total * 1.50 / cuotas

if (cuotas <= 3){
alert("Su pago es de "+cuotas+" cuotas a $"+result1.toFixed(2))
} else if (cuotas >= 4 && cuotas <= 6){
alert("Su pago es de "+cuotas+" cuotas a $"+result2.toFixed(2))
} else if (cuotas >= 7 && cuotas <= 12){
alert("Su pago es de "+cuotas+" cuotas a $"+result3.toFixed(2))
}else if (cuotas > 12){
alert("Cantidad de cuotas no validas")
}else{

}
}

//DOM

function cargarProductos(array) {
    let fila = ""
    tabla.innerHTML = ""
        array.forEach(producto => {
            fila = `<tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.precioFinal()}</td>
                        <td><button id="btn${producto.id}">+</button></td>
                    </tr>`
                    tabla.innerHTML += fila
        })
    } 
    cargarProductos(produ)

    

    const inputFiltrar = document.querySelector("input")

    function filtrarProductos() { 
        inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
        if (inputFiltrar.value !== "") {
            const resultado = produ.filter(producto => producto.nombre.includes(inputFiltrar.value))
                  if (resultado.length === 0) {
                    console.clear()
                    console.warn("No se encontraron productos.")
                    cargarProductos(produ)
                  } else {
                    cargarProductos(resultado)
                  }
        } else {
            cargarProductos(produ)
        }
    }
    
    inputFiltrar.addEventListener("input", filtrarProductos) 

    function eventoEnBotones() {
        produ.forEach(prod => {
            const btn = document.querySelector(`#btn${prod.id}`)
                  btn.addEventListener("click", ()=> agregarAlCarrito(`${prod.id}`))
        })
    }
    eventoEnBotones()

    function agregarAlCarrito(id) {
        const producto = produ.find(prod => prod.id == id)
        carrito.push(producto)
        console.table(carrito)
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    //Carrito

    function recuperarCarrito() {
        if (localStorage.getItem("carrito")) {
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }
    }
    recuperarCarrito()
    
    