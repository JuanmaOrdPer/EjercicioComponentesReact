import React, { useState } from 'react';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, titulo: 'Clase de Desarrollo', completado: false },
    { id: 2, titulo: 'Entregar tarea', completado: false },
    { id: 3, titulo: 'Estudiar', completado: false },
  ]);

  const marcaCompletado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? {tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <input
            type="checkbox"
            checked={tarea.completado}
            onChange={() => marcaCompletado(tarea.id)}
          />
          {tarea.titulo}
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
