import React from 'react';
import  Button  from "react-bootstrap/Button";

function handleClick() {
  alert('Hola he clickeado');
}

export function Button1() {
  return (
    <div className="container">
        <Button variant="primary" onClick={handleClick}>De clic aqui</Button>
    </div>
  )
}

export function Toolbar({onPlayMovie, onUploadImage}) {
  return (
    <>
    <div>
      <Button onClick = {onPlayMovie}>
        Cargar Pelicula
      </Button>{" "}
    </div>

    <div>
      <Button onClick = {onUploadImage}>
        Cargar Imagen
      </Button>
    </div>
    </>
  );
}

export function Button3({onClick, Children}) {
  return (
    <Button variant = "success" onClick={onClick}>
      {Children}
    </Button>
  );
}

