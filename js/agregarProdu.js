const agregar = document.querySelector("#agregar")

function enviar(){
    alert("Producto agregado al stock")
}

agregar.addEventListener("click", ()=> {
    enviar()
})

const inputs = document.querySelectorAll("input")
inputs.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "foco")
    input.addEventListener("blur", ()=> input.className = "")
    input.addEventListener("mousemove", ()=> input.title = "Ingrese aqui el parametro correspondiente")
    input.addEventListener("input", ()=> console.log(input.value))
}) 

agregar.addEventListener("mousemove", ()=> agregar.title = "Haga click para agregar producto")

const form = document.querySelector("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault()
        enviar()
})