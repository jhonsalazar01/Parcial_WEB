
const apellidosInput = document.getElementById("apellidos");
const nombresInput = document.getElementById("nombres");
const departamentoSelect = document.getElementById("departamento");
const municipioSelect = document.getElementById("municipio");
const fechaInput = document.getElementById("fecha");
const salarioInput = document.getElementById("salario");
const guardarButton = document.getElementById("guardar");
const datosEmpleadoTable = document.getElementById("datosEmpleado");


guardarButton.addEventListener("click", function() {
 
    const apellidos = apellidosInput.value;
    const nombres = nombresInput.value;
    const departamento = departamentoSelect.value;
    const municipio = municipioSelect.value;
    const fecha = fechaInput.value;
    const salario = salarioInput.value;

    const newRow = datosEmpleadoTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

 
    cell1.textContent = newRow.rowIndex;  
    cell2.textContent = `${apellidos}, ${nombres}`; 
    cell3.textContent = municipio;
    
    const edad = calcularEdad(fecha);
    cell4.textContent = edad; 

    apellidosInput.value = "";
    nombresInput.value = "";
    departamentoSelect.value = "------";
    municipioSelect.value = "------";
    fechaInput.value = "";
    salarioInput.value = "";
});
function calcularEdad(fechaNacimiento) {
  var fechaActual = new Date();

  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

 
  if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
          fechaActual.getDate() < fechaNacimiento.getDate())
  ) {
      edad--;
  }
  return edad;
}

const select = document.getElementById('departamento');
fetch('departments.json')
  .then(response => response.json()) 
  .then(data => {
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.code; 
      option.text = item.name; 
      select.appendChild(option);
    });
  });





departamentoSelect.addEventListener('change', () => {
  const selectedDepartmentCode = departamentoSelect.value;
  municipioSelect.innerHTML = '<option value="">Seleccionar</option>';
  fetch('towns.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        if (item.department === selectedDepartmentCode) {
          const option = document.createElement('option');
          option.value = item.code;
          option.text = item.name;
          municipioSelect.appendChild(option);
        }
      });
    });
});



