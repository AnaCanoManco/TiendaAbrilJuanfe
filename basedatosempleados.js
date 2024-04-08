let empleados=Array(
    {
        id:1,
        nombre:"Ana Videnth Cano",
        cargo:"contador",
        telefono:" 3245632269",
        correo:"mancoa@gmail.com",
        salario:3000000,
        contactoEmergencia:"3136030048",
        foto:"./img/empleado1.jpg"
    },
    {
        id:2,
        nombre:"Nuri Manco",
        cargo:"supervisora",
        telefono:" 3264821595",
        correo:"numava@gmail.com",
        salario:5000000,
        contactoEmergencia:"3154762554",
        foto:"./img/empleado2.jpg"
    },
    {
        id:3,
        nombre:"Marcelo Manco",
        cargo:"gerente",
        telefono:" 3225368425",
        correo:"marceloma@gmail.com",
        salario:4000000,
        contactoEmergencia:"3358365749",
        foto:"./img/empleado3.avif"
    },
    {
        id:4,
        nombre:"Siver Guisao",
        cargo:"Publicidad",
        telefono:" 3226583172",
        correo:"linamon@gmail.com",
        salario:3000000,
        contactoEmergencia:"3248635745",
        foto:"./img/empleado4.webp"
    },
    {
        id:5,
        nombre:"Maria Jose Toro",
        cargo:"Cocinera 1",
        telefono:" 3225368267",
        correo:"mariatoro@gmail.com",
        salario:2000000,
        contactoEmergencia:"3353695749",
        foto:"./img/empleado5.jpg"
    },
    {
        id:6,
        nombre:"Jose Antonio",
        cargo:"Cocinero 2",
        telefono:" 3226489425",
        correo:"Antoniovar@gmail.com",
        salario:2000000,
        contactoEmergencia:"3226365749",
        foto:"./img/empleado6.webp"
    },
    {
        id:7,
        nombre:"Maria Celeste",
        cargo:"Aseadora",
        telefono:" 3225335745",
        correo:"Celesteman@gmail.com",
        salario:1500000,
        contactoEmergencia:"3358334892",
        foto:"./img/empleado7.jpg"
    },
    {
        id:8,
        nombre:"Maximiliano Villa",
        cargo:"Mesero",
        telefono:" 3225368425",
        correo:"maxivilla@gmail.com",
        salario:1600000,
        contactoEmergencia:"3358364935",
        foto:"./img/empleado8.jpg"
    },
    {
        id:9,
        nombre:"Camila Ortiz",
        cargo:"Marketing",
        telefono:" 3236975122",
        correo:"cami15@gmail.com",
        salario:2000000,
        contactoEmergencia:"3358365749",
        foto:"./img/empleado9.jpg"
    },
    {
        id:10,
        nombre:"Lucia Orozco",
        cargo:"Auxiliar de produccion",
        telefono:" 3254936548",
        correo:"lucimen12@gmail.com",
        salario:3500000,
        contactoEmergencia:"3256365749",
        foto:"./img/empleado10.jpg"
    },
    {
        id:11,
        nombre:"Jose Echavarria",
        cargo:"Asesor de nutricion",
        telefono:" 3225368425",
        correo:"jose152@gmail.com",
        salario:2500000,
        contactoEmergencia:"3014365749",
        foto:"./img/empleado11.jpg"
    },
    {
        id:12,
        nombre:"Leticia Borja",
        cargo:"Aseadora 2",
        telefono:" 3225245309",
        correo:"letibor2@gmail.com",
        salario:1500000,
        contactoEmergencia:"3225365749",
        foto:"./img/empleado12.jpg"
    },
    {
        id:13,
        nombre:"Roberto Garcia",
        cargo:"mesero 1",
        telefono:" 3225363695",
        correo:"robert14@gmail.com",
        salario:1600000,
        contactoEmergencia:"3034365749",
        foto:"./img/empleado13.jpg"
    },
    {
        id:14,
        nombre:"Veronica Vasco",
        cargo:"Recepcionista",
        telefono:" 3225360146",
        correo:"vero15@gmail.com",
        salario:1600000,
        contactoEmergencia:"311836539",
        foto:"./img/empleado14.webp"
    },
    {
        id:15,
        nombre:"Jovan velez",
        cargo:"Administrador",
        telefono:" 3225303695",
        correo:"jovan26@gmail.com",
        salario:2500000,
        contactoEmergencia:"3326465749",
        foto:"./img/empleado15.jpg"
    },
    {
        id:16,
        nombre:"Yessica Cano",
        cargo:"Gourmet",
        telefono:"3125368685",
        correo:"yessi176@gmail.com",
        salario:2500000,
        contactoEmergencia:"3138545749",
        foto:"./img/empleado16.avif"
    },
    {
        id:17,
        nombre:"Luz Garcia",
        cargo:"Bartender",
        telefono:"3147568425",
        correo:"luz15@gmail.com",
        salario:2500000,
        contactoEmergencia:"3148536579",
        foto:"./img/empleado17.jpg"
    },
    {
        id:18,
        nombre:"Jorge Yanes",
        cargo:"Ayudante de cocina",
        telefono:" 3216368425",
        correo:"jorge123@gmail.com",
        salario:2000000,
        contactoEmergencia:"3458365749",
        foto:"./img/empleado18.jpg"
    },
    {
        id:19,
        nombre:"Cristian Londoño",
        cargo:"Domiciliario",
        telefono:" 3165368425",
        correo:"Cristian23@gmail.com",
        salario:2000000,
        contactoEmergencia:"3115365749",
        foto:"./img/empleado19.jpg"
    },
    {
        id:20,
        nombre:"Carlos Jaramillo",
        cargo:"Jefe de sala",
        telefono:" 3455368425",
        correo:"carlo15@gmail.com",
        salario:2000000,
        contactoEmergencia:"3115365749",
        foto:"./img/empleado20.jpg"
    }
)


// creando una referencia al contenedor de empleado
let contenedor=document.getElementById("contenedor")

//pasos para crear una lista dinamica para elementos

//1. debo recorrer las bases de datos del problema:
empleados.forEach(function(empleado){
    
    let columna=document.createElement("div")
    columna.classList.add("col")


    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")


    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto

    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre

    let cargo=document.createElement("h3")
    cargo.textContent=empleado.cargo

    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono

    let correo=document.createElement("h3")
    correo.textContent=empleado.correo

    let salario=document.createElement("h3")
    salario.textContent=empleado.salario

    // se asocian las estructuras en orden logico 
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    contenedor.append(columna)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(salario)
    
})