import React from 'react'


// Funcion AppGreeting
const Greetings = (props) => <h1>{props.name}</h1>
export function AppGreeting() {
  return (
    <div className = 'container'>
      <Greetings name = "Primer Mensaje"/>
      <Greetings name = "Segundo Mensaje"/>
      <Greetings name = "Tercer Mensaje"/>
    </div>
  );
};


// Funcion AppGreeter
const Greeter = (props) => {
  return (
    <h1>
      Hello, {props.first} {props.last}
    </h1>
  );
};
export function AppGreeter() {
  return (
    <div className = 'container'>
      <Greeter first = "Luis" last = "Velásquez"/>
      <Greeter first = "Carlos" last = "Chavez"/>
    </div>
  );
};


// Funcion AppGreeter2
const Greeter2 = ({first, last, estado}) => {
  return (
    <p>
      Hello, {first} tiene {last} años y esta {estado? "activo":"inactivo"} en el sistema.
    </p>
  );
};
export function AppGreeter2() {
  return (
    <div className = 'container'>
      <Greeter2 first = "Juan" last = {15} estado = {true}/>
      <Greeter2 first = "Maria" last = {18} estado = {true}/>
      <Greeter2 first = "Jose" last = {11} estado = {false}/>
    </div>
  );
};


// Funcion AppEmpleado
const Empleado = (props) =>{
  return(
    <div>
      <p>Nombre: {props.emple.nombre}</p>
      <p>Edad: {props.emple.edad}</p>
      <p>Salario: {props.emple.salario}</p>
    </div>
  );
};
const empleado = {
  nombre: "Juan",
  edad: 15,
  salario: 5000
};
export function AppEmpleado() {
  return (
    <div className = 'container'>
      <Empleado emple = {empleado}/>
    </div>
  );
};


// Funcion AppFruta
const Fruta = (props) => {
  const x = props.fru;
  const listItems = x.map((frutas) => <li>{frutas}</li>);
  return <ul>{listItems}</ul>
};
const frutas = ["manzana","pera","piña"];

export function AppFrutas () {
  return (
    <div className = 'container'>
      <Fruta fru = {frutas}/>
    </div>
  );
};


// Funcion AppProfile
export function GetImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com' +
    person.imageId +
    size +
    '.jpg'
  );
};
function Avatar({person, size}) {
  return (
    <img
      className = "avatar"
      src = {GetImageUrl(person)}
      alt = {person.name}
      width = {size}
      height = {size}
    />
  );
};
export function Profile() {
  return (
    <>
      <div className = 'card'>
        <Avatar size = {100}
          person  = {{name: "Katsuko Saruhashi", imageId: "Yfe0qp2", }}
      />{" "}
      </div>
      <div className = "card">
          <Avatar size = {80}
            person = {{ name: "Aklilu Lemma", imageId: "0KS67lh", }}
          />{" "}
      </div>
      <div className = "card">
          <Avatar size = {60}
            person = {{ name: "Lin Lanying", imageId: "1bX5QH6", }}
          />{" "}
      </div>
    </>
  );
};
export function AppProfile() {
  return (
    <Profile/>
  );
};

