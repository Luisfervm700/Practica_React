import './App.css'
import ProjectsPage from './Projects/ProjectsPage';
import ProjectsPage2 from './Projects/ProjectsPage2';

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
}

<div>
  {estaregistrado ?(
    <Registrado/>
    ) : (
      <Login/>
    )
  }
</div>



/* export default App */
