import { getDepartaments, deleteCiudadesAll, deleteDepartamento, putDepartamentos, getCiudades, deleteCiudades, putCiudades, postDepartamento, postCiudades } from "../Apiconeccion/API.js";

(function showDepartament() {
  const cuerpoDepartamentos = document.querySelector(".cuerpoDepartament");
  document.addEventListener("DOMContentLoaded", showDepartament);
  const setDepartament = new Set();

  async function showDepartament() {
    let departamentos = await getDepartaments();
    console.log(departamentos);

    departamentos.forEach((departamento) => {
      const { id, nomDepartamento } = departamento;
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${id}</th>
        <td>${nomDepartamento}</td>
        <td><button type="button" data-departamento="${id}" class="btn btn-danger delete">Delete</button></td>
        <td><button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar" data-departamento="${id}" class="btn btn-warning update">Update</button></td>
      `;
      cuerpoDepartamentos.appendChild(row);
    });

    cuerpoDepartamentos.addEventListener("click", confirmDeUp);
  }

  function confirmDeUp(e) {
    if (e.target.classList.contains("delete")) {
      console.log("Diste clic en eliminar");
      const elid = parseInt(e.target.dataset.departamento);
      let confirmar = confirm("¿Desea eliminar?");
      if (confirmar) {
        deleteDepartamento(elid);
        deleteCiudadesAll(elid);
      }
    } else if (e.target.classList.contains("update")) {
      const otroId = parseInt(e.target.dataset.departamento);
      console.log(otroId);
      document.getElementById("formUpdate").addEventListener("submit", (e) => {
        e.preventDefault();
        let dato = Object.fromEntries(new FormData(e.target));
        document.getElementById("nomDepartamento").value = "";
        putDepartamentos(dato, otroId);
      });
    }
  }
})();

(function showCiudades() {
  const cuerpoCiudad = document.getElementById("cuerpoCiudad");
  document.addEventListener("DOMContentLoaded", showCiudades);

  async function showCiudades() {
    let ciudades = await getCiudades();
    console.log(ciudades);

    ciudades.forEach((ciudad) => {
      const { id, nomCiudad, imagen, departamentoId } = ciudad;
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${id}</th>
        <td>${nomCiudad}</td>
        <td><img src="./stock-photo-drone-view-of-the-international-and-financial-center-of-bogota-at-sunset-2023944884.jpg" alt="Imagen de la ciudad"></td>
        <td>${departamentoId}</td>
        <td><button type="button" data-ciudades="${id}" class="btn btn-danger deletePunto">Delete</button></td>
        <td><button type="button" data-bs-toggle="modal" data-bs-target="#modalModificar2" data-ciudades="${id}" class="btn btn-warning updatePunto">Update</button></td>
      `;
      cuerpoCiudad.appendChild(row);
    });

    cuerpoCiudad.addEventListener("click", confirmDeUpPunto);
  }

  function confirmDeUpPunto(e) {
    if (e.target.classList.contains("deletePunto")) {
      console.log("Diste clic en eliminar");
      const idCiudad = parseInt(e.target.dataset.ciudades);
      let confirmar = confirm("¿Desea eliminar?");
      if (confirmar) {
        deleteCiudades(idCiudad);
      }
    } else if (e.target.classList.contains("updatePunto")) {
      const idCiudad = parseInt(e.target.dataset.ciudades);
      console.log(idCiudad);
      const formUpdatePunto = document.getElementById("formUpdatePunto");
      formUpdatePunto.dataset.ciudades = idCiudad;
      formUpdatePunto.addEventListener("submit", (e) => {
        e.preventDefault();
        const dato = Object.fromEntries(new FormData(formUpdatePunto));
        document.getElementById("nomPuntoAct").value = "";
        putCiudades(dato, idCiudad);
      });
    }
  }
})();

let form = document.getElementById("form");

form.addEventListener("submit", validateData);

function validateData(e) {
  e.preventDefault();

  const nombre = document.getElementById("nomDepartamento").value;

  const data = {
    nomDepartamento: nombre
  };

  if (validate(data)) {
    alert("Todos los campos son obligatorios");
    console.log("Todos los campos son obligatorios");
    return;
  }

  postDepartamento(data);

  document.getElementById("nomDepartamento").value = "";
}

function validate(objeto) {
  return !Object.values(objeto).every((element) => element !== "");
}
