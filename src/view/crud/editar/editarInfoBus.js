const formBus = document.getElementById("formBus")
const inputNumPlaca = document.getElementById("numPlaca")
const inputColor = document.getElementById("color")
const inputMarca  = document.getElementById("marca")
const inputModelo = document.getElementById("modelo")
const inputCapacidadMax = document.getElementById("capacidadMax")
const inputNumeroEjes = document.getElementById("numeroEjes")
const inputTieneBaño = document.getElementById("tieneBaño")
const btnGuardarBus = document.getElementById("btnGuardarBus")

const formBusEditar = document.getElementById("formBusEditar")
const inputIdActualizar = document.getElementById("inputIdActualizar")
const btnBuscarBusId = document.getElementById("btnBuscarBusId")
const btnGuardarBusActualizado = document.getElementById("btnGuardarBusActualizado")


//--------------------------- BOTON PARA BUSCAR BUS POR ID -------------------------//
const realizarPeticiónFetchGET = (ruta) => {
   return fetch(`http://localhost:3000/${ruta}`, {
      method: 'PATCH',
   })
      .then((response) => {
         if(!(response.ok)) {
            alert("No se encuentra el dato")
         } else return response.json()         
      })
      .catch((error) => console.error(error));
};

btnBuscarBusId.onclick = (e) => {
   e.preventDefault();
   realizarPeticiónFetchGET(`bus/${inputIdActualizar.value}`)
      .then((datos) => {
         inputNumPlaca.value = datos.numPlaca;
         inputColor.value = datos.color;
         inputMarca.value = datos.marca;
         inputModelo.value = datos.modelo;
         inputCapacidadMax.value = datos.capacidadMax;
         inputNumeroEjes.value = datos.numeroEjes;
         inputTieneBaño.value = datos.tieneBaño;
      })
      .catch((error) => console.error(error));
};


//--------------- BOTON PARA ENVIAR INFO DEL BUS ACTUALIZADO --------------------//

realizarPeticiónFetchPATCH = (ruta, objeto) => {
   let valores = JSON.stringify(objeto);
   fetch(`http://localhost:3000/${ruta}/${inputIdActualizar.value}`, {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json'
      },
      body: valores,
   })
      .then((response) => {
         if(response.ok) {
            alert("Los datos se han ACTUALIZADOS correctamente")
         } else {
            alert("ERROR!!!!! los datos NO se han actualizados")
      }})
      .catch((error) => console.error(error));
};


btnGuardarBusActualizado.onclick = (e) => {
   e.preventDefault();
   let objetoBus = {
      numPlaca: inputNumPlaca.value,
      color: inputColor.value,
      marca: inputMarca.value,
      modelo: inputModelo.value,
      capacidadMax: parseInt(inputCapacidadMax.value),
      numeroEjes: parseInt(inputNumeroEjes.value),
      tieneBaño: inputTieneBaño.value
   }
   realizarPeticiónFetchPATCH('bus', objetoBus);
   formBus.reset()
   formBusEditar.reset();
};