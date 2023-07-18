import { postCiudades } from "../API/api.js";

let formPunto = document.getElementById("formPunto");

formPunto.addEventListener("submit", validateDataPu);

function validateDataPu(e) {
  e.preventDefault();
  e.stopPropagation(); // Detener la propagación del evento

  const nomCiudad = document.getElementById("nomCiudad").value;
  const departamentoId = parseInt(document.getElementById("ccateDepartamentos").value);
  const imagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmILBAoPxNeKkC3nEAP_o8VIVOtWg-uWyuFkVdWLnm&s';

  const dataPuntos = {
    nomCiudad,
    departamentoId,
    imagen,
  };

  if (validate(dataPuntos)) {
    alert("Todos los campos son obligatorios");
    console.log("Todos los campos son obligatorios");
    return;
  }

  postCiudades(dataPuntos);

  document.getElementById("formPunto").reset();
}

function validate(objeto) {
  return !Object.values(objeto).every((element) => element !== "");
}
