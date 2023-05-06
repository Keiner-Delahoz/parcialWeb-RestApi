const formBusEliminar = document.getElementById("formBusEliminar")
const idBus = document.getElementById("idBus")
const btnEliminarBusId = document.getElementById("btnEliminarBusId")


realizarPeticiónFetchDELETE = (ruta) => {
   fetch(`http://localhost:3000/${ruta}`, {
      method: 'DELETE',
   })
      .then((response) => {
         if(response.ok) {
            alert("Los datos se han eliminado correctamente")
         } else {
            alert("No se encuentra el dato a eliminar")
         }
      })
      .catch((error) => console.error(error));
};


btnEliminarBusId.onclick = (e) => {
   e.preventDefault();
   realizarPeticiónFetchDELETE(`bus/${idBus.value}`);
   formBusEliminar.reset()
};

