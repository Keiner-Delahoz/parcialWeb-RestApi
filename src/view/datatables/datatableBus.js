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
   await listBus();
   dataTable =$('#datatable_bus').dataTable(dataTableOptions);

   dataTableIsInitialized = true;
}

const listBus = async() => {
   try {
      const response = await fetch("http://localhost:3000/bus");
      const buses = await response.json();
      let content = ``;
      buses.forEach((bus, index) => {
         content += `
         <tr>
            <td>${index+1}</td>
            <td>${bus.numPlaca}</td>
            <td>${bus.id}</td>
            <td>${bus.color}</td>
            <td>${bus.marca}</td>
            <td>${bus.modelo}</td>
            <td>${bus.capacidadMax}</td>
            <td>${bus.numeroEjes}</td>
            <td>${bus.tieneBaño}</td>
         </tr>
         `;
      });
      tableBody_bus.innerHTML = content;
   } catch (ex) {
      alert(ex)
   }
}



window.addEventListener("load", async() => {
   await initDataTable();
});

