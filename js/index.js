//VARIABLES

const IVA = 1.21
const creoID = ()=> parseInt(Math.random() * 1000000)
const produ = [] 
const carrito = []

//CLASES PARA PRODUCTOS

class Producto {
    constructor(id, nombre, importe, categoria) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
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

function generarCarrito() {
    carrito.push(new Producto(899656, "GUITARRA ELECTRICA", 50000, "GUITARRA"))
    carrito.push(new Producto(325326, "FUNDA", 4000, "ACCESORIO"))
    carrito.push(new Producto(775850, "CUERDAS", 1500, "ACCESORIO"))
}

generadorProdu()
generarCarrito()

function agregarProdu() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let importe = parseFloat(prompt("Ingresa el precio del producto:"))
    const prod = {id: id, nombre: nombre, importe: importe}
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

function filtrarProdu() {
    let filtro = prompt("Ingresa un filtro de lo que estas buscando:")
    let resultado = produ.filter((producto) => producto.nombre.includes(filtro))
        console.table(resultado)
}

