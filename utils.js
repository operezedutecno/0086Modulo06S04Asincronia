import axios from "axios"

const urlBase = "https://swapi.dev/api/"

export const consultarPersonaje = (idPersonaje) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlBase}/people/${idPersonaje}`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error)
            })
    })
}