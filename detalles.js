import { consultarUrl, pintarElementoTexto, pintartarjetas2,CheckCombinados } from "./funciones/funciones.js";

let id = new URLSearchParams(window.location.search).get("id")

let urlDepartamento = `https://api-colombia.com/api/v1/Department/${id}`

let departamento = await consultarUrl(urlDepartamento)

pintarElementoTexto("tituloDetalles", departamento.name)
pintarElementoTexto("descripcionDetalles", departamento.description)
pintarElementoTexto("poblacion", departamento.population)
pintarElementoTexto("municipios", departamento.municipalities)
pintarElementoTexto("capital", departamento.cityCapital.name)
pintarElementoTexto("descrpcioncapital", departamento.cityCapital.description.substring(0, 100) + "...")
pintarElementoTexto("flagsCiudades", `<img src="./assets/flags/${departamento.name}.jfif" class="flagsCiudades">`)


let urlciudades = `https://api-colombia.com/api/v1/Department/${id}/cities`
let ciudades = await consultarUrl(urlciudades)
pintartarjetas2(ciudades, "ciudades", "primary")


let urlAreas = `https://api-colombia.com/api/v1/Department/${id}/naturalareas `
let areas = await consultarUrl(urlAreas)
pintartarjetas2(areas[0].naturalAreas, "ciudades", "success")


document.getElementById("CheckCiudades").addEventListener('change', e => {
    CheckCombinados(areas[0].naturalAreas,ciudades)
})

document.getElementById("CheckAreasNaturales").addEventListener('change', e => {
    CheckCombinados(areas[0].naturalAreas,ciudades)
})



