let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
   pageLength:5,
   responsive: true,
   destroy: true,
   autoFill: true,
   language: {
      "decimal": "",
      "emptyTable": "No hay información",
      "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
      "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
      "infoFiltered": "(Filtrado de _MAX_ total entradas)",
      "infoPostFix": "",
      "thousands": ",",
      "lengthMenu": "Mostrar _MENU_ Entradas",
      "loadingRecords": "Cargando...",
      "processing": "Procesando...",
      "search": "Buscar:",
      "zeroRecords": "Sin resultados encontrados",
      "paginate": {
          "first": "Primero",
          "last": "Ultimo",
          "next": "Siguiente",
          "previous": "Anterior"
      }
  },
}

const initDataTable = async() => {
   if(dataTableIsInitialized) {
      dataTable.destroy();
   }
   await listAvion();
   dataTable =$('#datatable_avion').dataTable(dataTableOptions);

   dataTableIsInitialized = true;
}

const listAvion = async() => {
   try {
      const response = await fetch("http://localhost:3000/avion");
      const aviones = await response.json();
      let content = ``;
      aviones.forEach((avion, index) => {
         content += `
         <tr>
            <td>${index+1}</td>
            <td>${avion.numPlaca}</td>
            <td>${avion.id}</td>
            <td>${avion.color}</td>
            <td>${avion.marca}</td>
            <td>${avion.modelo}</td>
            <td>${avion.capacidadMax}</td>
            <td>${avion.numeroMotores}</td>
            <td>${avion.maximaPresion}</td>
         </tr>
         `;
      });
      tableBody_avion.innerHTML = content;
   } catch (ex) {
      alert(ex)
   }
}



window.addEventListener("load", async() => {
   await initDataTable();
});

