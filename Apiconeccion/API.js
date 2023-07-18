const url = "http://localhost:3010";

export const getDepartaments = async () => {
  try {
    const result = await fetch(`${url}/Departamentos`);
    const departaments = await result.json();
    return departaments;
  } catch (error) {
    console.log(error);
  }
};

export const postDepartamento = async (data) => {
  console.log(data);
  try {
    await fetch(`${url}/Departamentos`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDepartamento = async (id) => {
  console.log(id);
  try {
    await fetch(`${url}/Departamentos/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }
};

export const putDepartamentos = async (data, id) => {
  console.log(id);
  try {
    await fetch(`${url}/Departamentos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCiudades = async () => {
  try {
    const result = await fetch(`${url}/Ciudades`);
    const ciudades = await result.json();
    return ciudades;
  } catch (error) {
    console.log(error);
  }
};

export const postCiudades = async (data) => {
  console.log(data);
  try {
    await fetch(`${url}/Ciudades`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCiudadesAll = async (id) => {
  console.log(id);
  try {
    await fetch(`${url}/Departamentos/${id}/Ciudades`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCiudades = async (id) => {
  console.log(id);
  try {
    await fetch(`${url}/Ciudades/${id}`, {
      method: 'DELETE'
    });
  } catch (error) {
    console.log(error);
  }
};

export const putCiudades = async (data, id) => {
  try {
    await fetch(`${url}/Ciudades/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.log(error);
  }
};
