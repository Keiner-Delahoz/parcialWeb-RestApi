const formAvion = document.getElementById("formAvion")
const inputNumPlaca = document.getElementById("numPlaca")
const inputColor = document.getElementById("color")
const inputMarca  = document.getElementById("marca")
const inputModelo = document.getElementById("modelo")
const inputCapacidadMax = document.getElementById("capacidadMax")
const inputNumeroMotores = document.getElementById("numeroMotores")
const inputMaximaPresion = document.getElementById("maximaPresion")
const btnGuardarAvion = document.getElementById("btnGuardarAvion")

const formAvionEditar = document.getElementById("formAvionEditar")
const inputIdActualizar = document.getElementById("inputIdActualizar")
const btnBuscarAvionId = document.getElementById("btnBuscarAvionId")
const btnGuardarAvionActualizado = document.getElementById("btnGuardarAvionActualizado")


//--------------------------- BOTON PARA BUSCAR AVION POR ID -------------------------//
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

btnBuscarAvionId.onclick = (e) => {
   e.preventDefault();
   realizarPeticiónFetchGET(`avion/${inputIdActualizar.value}`)
      .then((datos) => {
         inputNumPlaca.value = datos.numPlaca;
         inputColor.value = datos.color;
         inputMarca.value = datos.marca;
         inputModelo.value = datos.modelo;
         inputCapacidadMax.value = datos.capacidadMax;
         inputNumeroMotores.value = datos.numeroMotores;
         inputMaximaPresion.value = datos.maximaPresion;
      })
      .catch((error) => console.error(error));
};


//--------------- BOTON PARA ENVIAR INFO DEL AVION ACTUALIZADO --------------------//

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


btnGuardarAvionActualizado.onclick = (e) => {
   e.preventDefault();
   let objetoAvion = {
      numPlaca: inputNumPlaca.value,
      color: inputColor.value,
      marca: inputMarca.value,
      modelo: inputModelo.value,
      capacidadMax: parseInt(inputCapacidadMax.value),
      numeroMotores: parseInt(inputNumeroMotores.value),
      maximaPresion: parseInt(inputMaximaPresion.value)
   }
   realizarPeticiónFetchPATCH('avion', objetoAvion);
   formAvion.reset()
   formAvionEditar.reset();
};