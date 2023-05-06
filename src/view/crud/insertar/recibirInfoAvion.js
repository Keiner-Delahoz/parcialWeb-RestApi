const formAvion = document.getElementById("formAvion")
const inputNumPlaca = document.getElementById("numPlaca")
const inputColor = document.getElementById("color")
const inputMarca = document.getElementById("marca")
const inputModelo = document.getElementById("modelo")
const inputCapacidadMax = document.getElementById("capacidadMax")
const inputNumeroMotores = document.getElementById("numeroMotores")
const inputMaximaPresion = document.getElementById("maximaPresion")
const btnGuardarAvion = document.getElementById("btnGuardarAvion")

//----------- Form editar info-----------//
const inputIdActualizar = document.getElementById("idActualizar")
const btnActualizarAvion = document.getElementById("btnActualizarAvion")

// --------------------------- INGRESAR AVION (POST) ------------------------------//

const realizarPeticiónFetchPOST = (ruta, objeto) => {
   let valores = JSON.stringify(objeto);
   fetch(`http://localhost:3000/${ruta}`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: valores,
   })
      .then((response) => {
         if(response.ok) {
            alert("Los datos se han INSERTADO correctamente")
         } else {
            alert("ERROR!!!!! los datos NO se han insertado")
         }})
      .catch((error) => console.error(error));
};

btnGuardarAvion.onclick = (e) => {
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
   realizarPeticiónFetchPOST('registrarAvion', objetoAvion);
   formAvion.reset();
};









