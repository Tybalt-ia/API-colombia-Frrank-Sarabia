import { consultarUrl,pintarElementoTexto,pintartarjetas,filtroTexto, filtroRegion } from "./funciones/funciones.js";

let urlDatosColombia = "https://api-colombia.com/api/v1/Country/Colombia"


let data = await consultarUrl(urlDatosColombia)

pintarElementoTexto("Colombia",data.name)
pintarElementoTexto("descripcion",data.description)
pintarElementoTexto("capital",data.stateCapital)
pintarElementoTexto("moneda",data.currency)
pintarElementoTexto("subRegion",data.subRegion)
pintarElementoTexto("borders",data.borders.toString())
pintarElementoTexto("flags",`<img src="${data.flags[1]}">`)

let urlDepartamentos = "https://api-colombia.com/api/v1/Department"

let departamentos = await consultarUrl(urlDepartamentos)
departamentos = departamentos.sort((a,b)=>{
    return a.name > b.name ? 1 : -1;    
})
    
pintartarjetas(departamentos,"departamentos")

document.getElementById ("inputTexto").addEventListener('keyup', e =>{
    let  arreglodepartamentosTexto = filtroTexto(departamentos)
    let contenedor = document.getElementById("departamentos")    
    contenedor.innerHTML =""
    pintartarjetas(arreglodepartamentosTexto, "departamentos")    
})


document.getElementById ("selector").addEventListener ('change', e=>{
let arregloDepertametosPorRegion = filtroRegion (departamentos)
let contenedor = document.getElementById("departamentos")
contenedor.innerHTML = ""
pintartarjetas (arregloDepertametosPorRegion, "departamentos")
})


