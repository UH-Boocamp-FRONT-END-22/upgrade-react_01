import { useState } from "react";
import "./Form.scss";

const INITIAL_STATE = {
  rol: "",
  email: "",
  age: 0,
  newsletter: "",
  birthdate: "",
  password: "",
};

const Form = (props) => {
    
  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (event) => {
    event.preventDefault();
    props.createUser(state);
    setState(INITIAL_STATE);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h2>DATE DE ALTA EN NUESTRO SISTEMA</h2>
      <form onSubmit={submitForm}>
        <fieldset>
          <label for=''>Selecciona tu rol:</label>
          <select name='rol' value={state.rol} onChange={handleInput}>
            <option>Administrador</option>
            <option>Editor</option>
            <option>Colaborador</option>
            <option>Moderador</option>
          </select>
        </fieldset>
        <fieldset>
          <label for=''>Introduce tu correo electrónico:</label>
          <input
            type='text'
            name='email'
            value={state.email}
            onChange={handleInput}></input>
        </fieldset>
        <fieldset>
          <label for=''>Introduce tu edad:</label>
          <input
            type='number'
            name='age'
            value={state.age}
            onChange={handleInput}></input>
        </fieldset>
        <fieldset>
          <label for=''>
            ¿Quieres que te mantengamos informado de todas las novedades?
          </label>
          <input
            type='checkbox'
            name='newsletter'
            value={state.newsletter}
            onChange={handleInput}></input>
        </fieldset>
        <fieldset>
          <label for=''>Introduce tu fecha de naciemiento:</label>
          <input
            type='date'
            name='birthdate'
            value={state.value}
            onChange={handleInput}></input>
        </fieldset>
        <fieldset>
          <label for=''>Introduce tu contraseña:</label>
          <input
            type='password'
            name='password'
            placeholder='contraseña...'
            onChange={handleInput}></input>
        </fieldset>

        <div>
          <button type='submit'>Crear usuario</button>
        </div>
      </form>
    </>
  );
};

export default Form;
