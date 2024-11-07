import React, { useState } from 'react';

function Toggle() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar' : 'Mostrar'}
      </button>
      <br></br>
      {visible && <p>Para ocultar</p>}
    </div>
  );
}

export default Toggle;
