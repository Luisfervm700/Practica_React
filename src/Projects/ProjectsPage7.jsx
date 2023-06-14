import React from 'react';
import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";

function handleClick() {
  alert('Hola he clickeado');
}

// Funcion Button1
export function Button1() {
  return (
    <div className="container">
        <Button variant="primary" onClick={handleClick}>De clic aqui</Button>
    </div>
  )
}

// Funcion Toolbar
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

// Funcion Button3
export function Button3({onClick, Children}) {
  return (
    <Button variant = "success" onClick={onClick}>
      {Children}
    </Button>
  );
}


// Funcion Signup
export function Signup() {
  return (
    <Form onSubmit = {()}></Form>
  )
}