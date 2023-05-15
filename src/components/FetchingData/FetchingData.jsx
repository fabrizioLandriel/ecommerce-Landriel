import React, { useEffect, useState } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [dataById, setDataById] = useState({});

  useEffect(() => {
    const obtenerPost = fetch("https://jsonplaceholder.typicode.com/users");
    obtenerPost.then((res) => res.json()).then((res) => setData(res));

    const obtenerPorId = fetch("https://jsonplaceholder.typicode.com/users/2");
    obtenerPorId.then((res) => res.json()).then((res) => setDataById(res));
  }, []);

  const crearNuevoPost = () => {
    let promesa = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        userId: 7,
        name: "Fabrizio Landriel ",
        edad: 18,
      }),
    });
    promesa.then().catch()
   
  };


  const editarUser = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users/2", {
        method: "PATCH",
        body: JSON.stringify({
            name: "Angelina De Maio"
        })
    })
  }

  console.log(data);
  console.log(dataById);

  return (
    <div>
      <h1>Peticiones</h1>

      <button onClick={crearNuevoPost}>Create Product.</button>
      <button onClick={editarUser}>Edit user.</button>
    </div>
  );
};

export default FetchingData;
