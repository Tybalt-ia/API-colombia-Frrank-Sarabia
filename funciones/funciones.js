
export async function consultarUrl(url) {
  return await fetch(url).then(Response => Response.json())
}


export function pintarElementoTexto(elementoXId, contenido) {
  let contenedor = document.getElementById(elementoXId);
  contenedor.innerHTML = contenido;
}

export function pintarElementoNodo(elemento, contenido) {
  let contenedor = document.getElementById(elemento);
  contenedor.appendChild(contenido)
}

export function formatoTarjeta(departamento) {
  let tarjeta = document.createElement('div')
  tarjeta.className = "card mb-3 col-4 tarjetaDep bg-transparent p-2 text-dark bg-opacity-25"
  tarjeta.innerHTML = `
    <div class="row g-0">
            <div class="col-md-4">
            <img src="./assets/flags/${departamento.name}.jfif" class="img-fluid rounded-start" alt="Bandera del departamento">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 id="tituloTarjeta" class="card-title">${departamento.name}</h5>
                <p id="DescripcionTarjeta" class="card-text">${departamento.description ? departamento.description.substring(0, 100) + "..." : "Ver mas informacion en detalles"}</p>
                <a id="DetallesTarjeta" href="./detalles.html?id=${departamento.id}" class="btn btn-primary">detalles</a>
              </div>
            </div>
          </div>
    `
  return tarjeta
}

export function pintartarjetas(arreglo, id) {
  arreglo.forEach(objeto => {
    let tarjeta = formatoTarjeta(objeto)
    pintarElementoNodo(id, tarjeta)
  });
}

export function formatoTarjeta2(ciudad, color) {
  let tarjeta2 = document.createElement('div')
  tarjeta2.className = `card text-bg-${color} mb-4 col-2 m-1`
  tarjeta2.innerHTML = `
  
          <div class="card-body">
            <h5 id="CiudadNombre" class="card-title">${ciudad.name}</h5>
          </div>
  `
  return tarjeta2
}

export function pintartarjetas2(arreglo, id, color) {
  arreglo.forEach(objeto => {
    let tarjeta2 = formatoTarjeta2(objeto, color)
    pintarElementoNodo(id, tarjeta2)
  });
}

export function pintarFilas(especies) {
  especies.forEach(especie =>{
    let fila = document.createElement ('tr')
    fila.className = ``
    fila.innerHTML = `
    
              <td>${especie.name}</td>
              <td>${especie.scientificName}</td>
              <td>${especie.impact}</td>
              <td>${especie.manage}</td>
              <td>${especie.riskLevel}</td>
              <td> <img src="${especie.urlImage}" class="img-fluid rounded-start" alt="Especie invasora"></td> 
                  `
    pintarElementoNodo("especies", fila)

    if (especie.riskLevel == 1 ) { fila.className= `table-primary`      
    } else if (especie.riskLevel == 2) { fila.className= `table-success`      
    }
  }) 

}

export function CheckCombinados(area, ciudad) {
  let checkboxes = [...document.querySelectorAll('input[type="checkbox"]:checked')]
  let checked = checkboxes.map(e => e.value)
  pintarElementoTexto("ciudades", "")
  if (checked.includes("area") && checked.includes("ciudad")) {
    pintartarjetas2(ciudad, "ciudades", "primary")
    pintartarjetas2(area, "ciudades", "success")
  } else if (checked.includes("ciudad")) {
    pintartarjetas2(ciudad, "ciudades", "primary")
  } else if (checked.includes("area")) {
    pintartarjetas2(area, "ciudades", "success")
  } else {
    pintartarjetas2(ciudad, "ciudades", "primary")
    pintartarjetas2(area, "ciudades", "success")
  }
}



export function filtroTexto(arregloDepartamentos) {
  let texto = document.getElementById("inputTexto").value.toLowerCase()  
  let DepartamentosFiltrados = arregloDepartamentos
  if (texto != null || texto != undefined) {
    DepartamentosFiltrados = arregloDepartamentos.filter(departamento => departamento.name.toLowerCase().includes(texto)
   )}
  return (DepartamentosFiltrados)
}

export function filtroRegion(arregloDepartamentos) {  
  let region = document.getElementById("selector").value
  let DepartamentosFiltrados = arregloDepartamentos
  if (region >0 ) {
    DepartamentosFiltrados=arregloDepartamentos.filter(departamento=>departamento.regionId == region
  )}

  return  DepartamentosFiltrados
  }
