import React from 'react'


// Funcion MyButton
export function MyButton() {
  return(
    <button>
      I'm a button
    </button>
  );
};


// Funcion MyApp
export function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
};



// Funcion AboutPage
export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
};


// Funcion Profile
const user = {
  name: 'BMW',
  imageUrl: 'https://www.bmwgroup.com/en/brands-and-services/bmw/bmwi.html',
  imageSize: '90',
};
export function Profile() {
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


// Funcion ShoppingList
const Product = [
  {title: 'Cabbage', isFruit: false, id: 1},
  {title: 'Garlic', isFruit: false, id: 2},
  {title: 'Apple', isFruit: true, id: 3},
];
export function ShoppingList() {
  const listItems = Product.map(product =>
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


/* let content;
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
  {estaregistrado ? (<Registrado/>) : (<Login/>)}
</div> */
