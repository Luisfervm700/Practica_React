import React from 'react'



/* const ProjectsPage2 = ()=>{
  const name = 'lian';

  const element = <h1>Hello,
    {name}. Welcome to estudiante de React.</h1>;
  return element;
} */


/* const ProjectsPage2 = ()=>{
  let i = 1;

  const element = <h1> { (i = 1) ? 'Hola!!' : 'Acceso denegado' } </h1>
  return element;
} */


/* const ProjectsPage2 = ()=>{
  const element = <h1 className = "firstAttribute">¡Hola!</h1>;
  return element;
} */


/* const ProjectsPage2 = ()=>{
  let varName = "clase1"
  const ele = <h1 className= {varName}>¡Saludo!</h1>;
  return ele;
} */

/* const ProjectsPage2 = ()=>{
  const element = <div>
    <h1>Pagina principal</h1>
    <h2>Articulo</h2>
    <section>100 años de soledad</section>
  </div>;
  return element;
} */


function formatName(user) {
  return user.firstName + ' ' + user.lastname;
}

const user = {
  firstName: 'Luis Fernando',
  lastname: 'Velásquez Monsalve'
};

const ProjectsPage2 = ()=>{
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


export default ProjectsPage2