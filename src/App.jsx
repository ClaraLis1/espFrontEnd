import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { InputProvider } from "./context/ContextoFormulario";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <InputProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </InputProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
