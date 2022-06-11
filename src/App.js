import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Buscador from "./pages/Buscador";
import Home from "./pages/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscador" element={<Buscador />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
