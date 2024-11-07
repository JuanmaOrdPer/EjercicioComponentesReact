import React, { useState } from 'react';

function FormularioSimple() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const cambio = (e) => {
    e.preventDefault();
    setMensaje(`¡Bienvenido, ${nombre}!`);
  };

  return (
    <div>
      <form onSubmit={cambio}>
        <input 
          type="text" 
          placeholder="Ingresa tu nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
        <button type="submit">Enviar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default FormularioSimple;
