const contenedor = document.querySelector("#tabla")

const URL = "../basedatos/listado.json"

let contenidoHTML = ""

const mostrarLista = (lista)=> {
    const {id, nombre, precio} = lista 
    return      `<tr>
                    <td>${id}</td>
                    <td>${nombre}</td>
                    <td>${precio}</td>
                    <td><button id="btn${id}">+</button></td>
                </tr>`
}

const cargarListado = async ()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        produ = data
        produ.forEach(etiqueta => {
            contenidoHTML += mostrarLista(etiqueta)
        });
    } catch (error) {
        
    } finally {
        contenedor.innerHTML = contenidoHTML
    }
}

