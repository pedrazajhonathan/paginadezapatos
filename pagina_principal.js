// haciendo el efecto maquina

let texto = "vida"
let speed = 200
let i = 0
let empezar = 0
let h1 = document.getElementById("texto")

setTimeout(()=> { 
    function maquina(){
        if(i < texto.length){
            h1.textContent += texto.charAt(i)
            i++
        }
    } 
    empezar = setInterval(maquina , speed)
    
},1500)




//haciendo el menu responsive

let menu = document.getElementById("menu")
let enlace = document.getElementById("enlace")

menu.addEventListener("click" , () => {
    menu.classList.toggle("hola")
    enlace.classList.toggle("ancho")
})


//haciendo la funcion de busqueda de los productos mas vendidos

let zapatos = [
    {
        img : "assets/zapatos caballeros/nike for one 1 (1).png",
        marca : "NIKE",
        modelo : "for one 1",
    },
    {
        img : "assets/zapatos caballeros/nike air for 1 color rosafo.png",
        marca : "Adidas",
        modelo : "verse 3",
    },
    {
        img : "assets/zapatos caballeros/nike yordan 1 color blanco.png",
        marca : "NIKEYordan",
        modelo : "retro 5",
    },
    {
        img : "assets/zapatos caballeros/nike botin blanco.png",
        marca : "NIKEYordan",
        modelo : "retro 6",
    }
]

let marca = document.getElementById("marca")
let modelo = document.getElementById("modelo")
let img = document.getElementById("img")
let botom1 = document.getElementById("botom1")
let botom2 = document.getElementById("botom2")
let botom3 = document.getElementById("botom3")
let botom4 = document.getElementById("botom4")

let objeto_botom = [botom1,botom2,botom3,botom4]

function mostrar(i){
    let objeto = zapatos[i]
            
    marca.textContent = `Marca : ${objeto.marca}`
    modelo.textContent = `Modelo : ${objeto.modelo}`
    img.src = objeto.img
}