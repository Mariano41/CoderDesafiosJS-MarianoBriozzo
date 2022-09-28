const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputComentarios = document.querySelector("#inputComentarios")
const btnEnviar = document.querySelector("#btnEnviar")

const inputs = document.querySelectorAll("input, textarea")
inputs.forEach(input => {
    input.addEventListener("focus", ()=> input.className = "foco")
    input.addEventListener("blur", ()=> input.className = "")
    input.addEventListener("mousemove", ()=> input.title = "Ingrese aqui el parametro correspondiente")
    input.addEventListener("input", ()=> console.log(input.value))
}) 

function guardarDatos() {
    localStorage.setItem("nombre", inputNombre.value)
    localStorage.setItem("email", inputEmail.value)
    localStorage.setItem("comentarios", inputComentarios.value)
}

btnEnviar.addEventListener("click", guardarDatos)

function recuperarDatos() {
    inputNombre.value = localStorage.getItem("nombre")
    inputEmail.value = localStorage.getItem("email")
    inputComentarios.value = localStorage.getItem("comentarios")
}

document.addEventListener("DOMContentLoaded", recuperarDatos)