const formAvionEliminar = document.getElementById("formAvionEliminar")
const idAvion = document.getElementById("idAvion")
const btnEliminarAvionId = document.getElementById("btnEliminarAvionId")


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


btnEliminarAvionId.onclick = (e) => {
   e.preventDefault();
   realizarPeticiónFetchDELETE(`avion/${idAvion.value}`);
   formAvionEliminar.reset()
};

