import { getCiudades, deleteCiudades, putCiudades } from "../Apiconeccion/API.js";

(function showCiudades() {
  const cuerpoCiudad = document.getElementById("cuerpoCiudad");

  async function showCiudades() {
    try {
      const ciudades = await getCiudades();
      console.log(ciudades);

      ciudades.forEach((ciudad) => {
        const { id, nomCiudad, departamentoId } = ciudad;
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
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmDeUpPunto(e) {
    if (e.target.classList.contains("deletePunto")) {
      console.log("Diste clic en eliminar");
      const idCiudad = parseInt(e.target.dataset.ciudades);
      let confirmar = confirm("¿Desea eliminar?");
      if (confirmar) {
        try {
          await deleteCiudades(idCiudad);
          e.target.parentElement.parentElement.remove();
        } catch (error) {
          console.log(error);
        }
      }
    } else if (e.target.classList.contains("updatePunto")) {
      const idCiudad = parseInt(e.target.dataset.ciudades);
      console.log(idCiudad);
      const formUpdatePunto = document.getElementById("formUpdatePunto");
      formUpdatePunto.dataset.ciudades = idCiudad;
      formUpdatePunto.addEventListener("submit", async (e) => {
        e.preventDefault();
        const dato = Object.fromEntries(new FormData(formUpdatePunto));
        document.getElementById("nomPuntoAct").value = "";
        try {
          await putCiudades(dato, idCiudad);
          // Realizar las acciones necesarias después de la actualización
        } catch (error) {
          console.log(error);
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", showCiudades);
})();
