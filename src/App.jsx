import './App.css'
import ProjectsPage1 from './Projects/ProjectsPage1';
import ProjectsPage2 from './Projects/ProjectsPage2';
import {MyButton, MyApp, AboutPage, Profile, ShoppingList} from './Projects/ProjectsPage3';
import {AppGreeting, AppGreeter, AppGreeter2, AppEmpleado, AppFrutas, AppProfile} from './Projects/ProjectsPage4';
import {Team} from './Projects/ProjectsPage5';
import React from 'react';


function App() {
  return (
    <div className='container'>
      <ProjectsPage1/>
      <ProjectsPage2/>

      {/* Estas son funciones del ProjectPage3 */}
      <MyButton/>
      <MyApp/>
      <AboutPage/>
      <Profile/>
      <ShoppingList/>

      {/* Estas son funciones del ProjectPage4 */}
      <AppGreeting/>
      <AppGreeter/>
      <AppGreeter2/>
      <AppEmpleado/>
      <AppFrutas/>
      <AppProfile/>

      {/* Estas son funciones del ProjectPage5 */}
      <Team/>
    </div>
  );
};


export default App;