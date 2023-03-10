import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { Select } from "../Select/Select";
import InputEspecie from "../InputEspecie/InputEspecie";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

const Formulario = () => {
  
  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input dataType='entrenador' name="nombre" label="Nombre" />
              <Input dataType='entrenador'  name="apellido" label="Apellido" />
              <Input dataType='entrenador'  name="email" label="Email" type="email" />
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input dataType='pokemon' name="nombrePokemon" label="Nombre" />
              <Input dataType='pokemon' name="alturaPokemon" label="altura" />
              {/* <Input dataType='pokemon' name="tipoPokemon" label="tipo" /> */}
              <Select dataType='pokemon'  name="tipoPokemon" label="tipo"/>
              <InputEspecie dataType='pokemon'  name="especiePokemon" label="especie"/>
              <Input dataType='pokemon' name="edadPokemon" label="edad" />
            </div>
          </div>
          <Detalle />
        </div>
      </div>
      
    </>
  );
};

export default Formulario;
