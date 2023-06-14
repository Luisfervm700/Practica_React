import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { sculptureList } from "../data3";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";


// Funcion Counter
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


// Funcion ListaPersona
export function ListaPersona () {
    const [elementos, setElementos] = useState ([]);
    const [nuevoElemento, setNuevoElemento] = useState ("");

    const agregarElemento = () => {
        if (nuevoElemento.trimEnd () != "") {
            setElementos([...elementos, nuevoElemento]);
            setNuevoElemento("");
        }
    };

    const borrarElemento = (index) => {
        const nuevoElementos = [...elementos];
        nuevoElementos.splice(index, 1);
        setElementos(nuevoElementos);
    };

    return (
        <div className = "container">
            <div className = "">
                <Table striped bordered hover size = "sm">
                    <thead>
                        <tr>
                            <th>Elemento</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementos.map((elemento, index) =>(
                            <tr>
                                <td>{elemento}</td>
                                <td>
                                    <Button onClick = {() => borrarElemento (index)}>Borrar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <input type="text" value = {nuevoElemento}
                    onChange = {(e) => setNuevoElemento(e.target.value)}
                />{" "}{" "}
                <Button onClick = {agregarElemento}>Agregar</Button>
            </div>
        </div>
    );
}


// Funcion DiceGame
export function DiceGame () {
    const [dice1, setDice1] = useState(Math.floor(Math.random() * 6) + 1);
    const [dice2, setDice2] = useState(Math.floor(Math.random() * 6) + 1);

    const rollDice = () => {
        setDice1(Math.floor(Math.random() * 6) + 1);
        setDice2(Math.floor(Math.random() * 6) + 1);
    };

    return (
        <div className = "container">
            <h1>Dice Game</h1>
            <div>
                <img src = {"src\\assets\\img\\dado.jpg"} alt = "Dice 1" />
                <h2>Jugador 1: - {dice1}</h2>
            </div>
            <div>
                <h2>Jugador 2: - {dice2} </h2>
            </div>
            <div>
                <h2>
                    {(dice1 == dice2) ? "Empatados": (dice1 > dice2) ? "Gano el jugador 1" : "Gano el jugador 2"}
                </h2>
            </div>
            <button onClick = {rollDice} >Roll Dice</button>
        </div>
    );
};


// Funcion Gallery
export function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < 11) {
            setIndex(index + 1);
        };
    };

    function handleClickMenos() {
        if (index >= 1) {
            setIndex(index - 1);
        };
    };

    let sculpture = sculptureList[index];
    return (
        <div className="container">
            <Card className="pos2" style={{ width: "18rem" }}>
            <Card.Img src={sculpture.url} alt={sculpture.alt} />
            <Card.Body>
            <Card.Title>
                {sculpture.name} by {sculpture.artist}
            </Card.Title>
            <Card.Text>
                {sculpture.description}
                <center>
                    <h3>
                        <Badge bg="secondary">
                        ({index + 1} of {sculptureList.length})
                        </Badge>
                    </h3>
                </center>
            </Card.Text>
            <Button variant="primary" size="sm" onClick={handleClick}>
                Siguiente
            </Button>{" "}
            <Button variant="primary" size="sm" onClick={handleClickMenos}>
                anterior
            </Button>
            </Card.Body>
        </Card>
        </div>
    );
};

