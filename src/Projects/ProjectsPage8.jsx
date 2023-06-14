import React, { useState } from 'react';

export function Counter () {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount (count + 1);
    };

    const decrement = () => {
        setCount (count - 1);
    };

    return (
        <div>
            <p>Contar: {count} </p>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </div>
    )
}

