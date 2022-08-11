import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../TodoContext'



function App() {
  
  return (
    /* Pasamos los valores de loading y error */
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;