import React from "react";

/* const Componente1 = ()=>
    <div className="container">
      Mi componente prueba
    </div>
; */

function MyButton() {
  return(
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
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