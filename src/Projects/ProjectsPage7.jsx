import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    <Form onSubmit = {() => alert ("¡Enviando! sus datos de logueo")}>
      <label>
        <h1>Form Login</h1>
      </label>
    <Form.Group className = "mb-3" controlId = "formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type = "email" placeholder = "Enter email" />
      <Form.Text className = "text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group className= "mb-3" controlId = "formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type = "password" placeholder = "Password"/>
      </Form.Group>
      <Form.Group className = "mb-3" coonttrolId = "formBasicCheckbox">
        <Form.Check type = "checkbox" label = "Check me out"/>
      </Form.Group>
      <Button variant = "primary" type = "submit"> Submit </Button>
      </Form>
  );
}
