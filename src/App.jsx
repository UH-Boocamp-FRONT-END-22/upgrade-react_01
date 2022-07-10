import './App.scss';
import { useState } from "react";
import { Form } from "./components/Form/Form";

const App = () => {

  const [state, setState] = useState([]);

  const createUser = (newUser) => {
    setState([...state, newUser]);
  }

  return (
    <div className="App">
      <h1>My App</h1>
      <Form createUser={createUser}/>
    </div>
  );
}

export default App;
