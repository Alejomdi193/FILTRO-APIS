import {postDepartamento,} from "../API/api.js";

let form=document.getElementById("form"); 

form.addEventListener("submit",validateData) 

function validateData(e){
    e.preventDefault();
    
    const nombre=document.getElementById("nomDepartamento").value

    const data={
        nomDepartamento:nombre
    };
    
    if (validate(data)) {
        alert("Todos los campos son obligatorios");
        console.log("Todos los campos son obligatorios");
        return;
    }
        
    postDepartamento(data);

document.getElementById("nombreRuta").value=""
};

function validate(objeto) {
    return !Object.values(objeto).every((element) => element !== "");
  }
