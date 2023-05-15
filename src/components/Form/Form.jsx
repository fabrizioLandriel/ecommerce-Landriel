import React, { useState } from "react";

const Form = () => {
  
    const [userData, setUserData] = useState({
        nombre: "",
        apellido: "",
        telefono: ""
        
    })

    
   const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value});
  } 

  const envioDeFormulario = (evento)=>{
    evento.preventDefault()
    // LOGIN
  
    console.log(userData)

  }
  

  return (
    <div>
      <h1>We are in the form</h1>

      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="Name"
          name="nombre"
          value={userData.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="apellido"
          value={userData.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
        <button type="button">Return</button>
      </form>
    </div>
  );
};

export default Form;
