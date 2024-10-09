// import { consultarPersonaje } from "./utils.js";
const { writeFile, appendFile, readFile } = require("fs");

(async () => {
    //  Ejemplo de proceso asíncrono
    // for (let index = 1; index <= 10; index++) {
    //     consultarPersonaje(index).then(response => {
    //         console.log(response);
    //     })
    // }

    //  Ejemplo de proceso síncrono
    // for (let index = 1; index <= 10; index++) {
    //     const response = await consultarPersonaje(index)
    //     console.log(response);
    // }

    //  Ejemplo Promise.all
    // const promesas = []
    // for (let index = 1; index <= 10; index++) {
    //     const peticion = consultarPersonaje(index)
    //     promesas.push(peticion)
    // }
    // const response = await Promise.all(promesas)
    // console.log(response);

    const texto = "\n\nTexto de pruebas"

    // Escritura en archivo sustituyendo lo ya existente
    // writeFile("files/personas.txt", "Otro texto", "utf8", (data) => console.log(data))

    // Escritura en archivo manteniendo lo ya existente, y escribiendo al final.
    // appendFile("files/personas.txt", texto, "utf8", (data) => console.log(data))

    // Ejemplo de lectura de archivo
    readFile("files/personas1.txt","utf-8", (error, data) => {
        if(error){
            console.log("Ocurrió un error en la lectura");
        } else {
            console.log(data);
        }
    })
})()




