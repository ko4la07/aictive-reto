import React from 'react'
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className='d-flex flex-column text-center pt-15'>
      <h2>No hay nada aquí!</h2>
      <p>
        <Link to="/" className='text-primary fw-bold'>Ir a la página principal</Link>
      </p>
    </div>
  );
}

export default NoMatch
