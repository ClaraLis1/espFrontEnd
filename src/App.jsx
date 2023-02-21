import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { InputProvider } from "./context/ContextoFormulario";

function App() {
  return (
    <div className="App">
      <InputProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </InputProvider>
    </div>
  );
}

export default App;
