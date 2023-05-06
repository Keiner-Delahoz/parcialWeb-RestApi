const formBus = document.getElementById("formBus")
const inputNumPlaca = document.getElementById("numPlaca")
const inputColor = document.getElementById("color")
const inputMarca  = document.getElementById("marca")
const inputModelo = document.getElementById("modelo")
const inputCapacidadMax = document.getElementById("capacidadMax")
const inputNumeroEjes = document.getElementById("numeroEjes")
const inputTieneBaño = document.getElementById("tieneBaño")
const btnGuardar = document.getElementById("btnGuardar")


const GuardarObjetoBus = (objeto) => {
   let valores = JSON.stringify(objeto);
   fetch("http://localhost:3000/bus", {
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

btnGuardar.onclick = (e) => {
   e.preventDefault();
   let objetoBus = {
      numPlaca: inputNumPlaca.value,
      color: inputColor.value,
      marca : inputMarca.value,
      modelo: inputModelo.value,
      capacidadMax: parseInt(inputCapacidadMax.value),
      numeroEjes: parseInt(inputNumeroEjes.value),
      tieneBaño: inputTieneBaño.value
   }
   GuardarObjetoBus(objetoBus);
   formBus.reset();
};




