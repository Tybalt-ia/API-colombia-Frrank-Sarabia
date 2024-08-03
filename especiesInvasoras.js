import { consultarUrl,pintarFilas } from "./funciones/funciones.js";

let urlEspecies = 'https://api-colombia.com/api/v1/InvasiveSpecie'



let especies = await consultarUrl(urlEspecies)

pintarFilas( especies)


