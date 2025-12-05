
//arreglo de objetos de los zapatos

let zapatos = [

    {
        img : "assets/nike air zoom pegasus caballeros.jpg",
        modelo : "air zoom pegasus",
        precio : "40$",
        color : "negro"
    },
    {
        img : "assets/nike dunk caballero.jpg",
        modelo : "dunk",
        precio : "55$",
        color : "negro con blanco"
    },
    {
        img : "assets/nike presto caballero.jpg",
        modelo : "presto",
        precio : "45$",
        color : "blanco con gris"
    },
    {
        img : "assets/Nike_React_Infinity_Run_Flyknit-removebg-preview.png",
        modelo : "react infinify",
        precio : "55$",
        color : "negro"
    },
    {
        img : "assets/Nike Total 90 SP caballero.jpg",
        modelo : "total 90 sp",
        precio : "45$",
        color : "negro"
    },
    {
        img : "assets/nike air max plus caballero.jpg",
        modelo : "air max plus",
        precio : "55$",
        color : "negro"
    },
]

let modelo = document.getElementById("modelo")
let precio = document.getElementById("precio")
let color = document.getElementById("color")
let imagen = document.getElementById("img")

let botom1 = document.getElementById("botom1")
let botom2 = document.getElementById("botom2")
let botom3 = document.getElementById("botom3")
let botom4 = document.getElementById("botom4")
let botom5 = document.getElementById("botom5")
let botom6 = document.getElementById("botom6")


let arreglo_botom = [botom1,botom2,botom3,botom4,botom5,botom6]

let imagen1 = document.getElementById("imagen1")
let imagen2 = document.getElementById("imagen2")
let imagen3 = document.getElementById("imagen3")
let imagen4 = document.getElementById("imagen4")
let imagen5 = document.getElementById("imagen5")
let imagen6 = document.getElementById("imagen6")


let arreglo_imagen = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6]

function mostrar(i){
    let zapatos_listo = zapatos[i] 

    arreglo_botom.forEach(botom => {
        botom.style.backgroundColor = "transparent"
    })

    arreglo_botom[i].style.backgroundColor = "blue"


    modelo.textContent =  `modelo: ${zapatos_listo.modelo}`
    precio.textContent = `precio: ${zapatos_listo.precio}`
    color.textContent = `color: ${zapatos_listo.color}`
    imagen.src = zapatos_listo.img

    //haciendo la animacion de seleccion de la imagen

    arreglo_imagen.forEach(img => {
        img.classList.remove("hola")
    })

    arreglo_imagen[i].classList.add("hola")
  

}


