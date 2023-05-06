import './App.css'
/* import ProjectsPage from './Projects/ProjectsPage';
import ProjectsPage2 from './Projects/ProjectsPage2'; */
import React from 'react';

/* function App() {
  return (
    <div className='container'>
      <ProjectsPage />
      <ProjectsPage2/>
    </div>
  )
} */

/* function App () {
  return (
    <blockquote cite = "MONTESQUIEU">
      Hay que estudiar mucho para saber poco.
    </blockquote>
  );
} */

function MyButton() {
  return(
    <button>
      I'm a button
    </button>
  );
};

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
};

const user = {
  name: 'BMW',
  imageUrl: 'https://www.bmwgroup.com/en/brands-and-services/bmw/bmwi.html',
  imageSize: '90',
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img 
        className='car'
        src={user.imagenUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }} />
    </>
  );
};

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else{
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

<div>
  {estaregistrado ?(
    <Registrado/>
    ) : (
      <Login/>
    )
  }
</div>

const product = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key = {product.id}
      style = {{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
      >
        {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

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


/* export default App */
