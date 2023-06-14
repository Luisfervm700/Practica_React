import React from "react";

const people1 = [
    'Mateo Vasquez: Matematicas',
    'Julio Ospina: Ingeniero se software',
    'Ana Perez: QA',
    'Felipe Ruiz: Diseñador',
    'Andrea Gonzalez: Desarrollodor'
];


// Funcion List
export function List () {
    const listItems = people1.map(person =>
        <li>{person}</li>
        );
    return <ul>{listItems}</ul>;
}


// function getImageUrl(person) {
//     return (
//         'https://i.imgur.com' +
//         's.jpg'
//     );
// }

const people2 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'Desarrollador',
    accomplishment: 'scalable applications',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'Diseñador',
    accomplishment: 'web design and layout',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'Desarrollador',
    accomplishment: 'in python and javascript',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'Diseñador',
    accomplishment: 'first to create reactive web pages',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'Desarrollador',
    accomplishment: 'app creator for facebook and instagram',
    imageId: 'lrWQx8l'
  }];



// Funcion ListPersona
export function ListPersona() {
  let filtro = "Desarrollador"
  const desarrollador = people2.filter(person =>
    person.profession == filtro
    );
  const listItems = desarrollador.map(person =>
    <li>
      <img
        // src = {getImageUrl(person)}
        alt = {person.name}
      />
      <p>
        <b>
          {person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
    );
    return <ul>{listItems}</ul>;
}


