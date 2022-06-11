import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Buscador from "./pages/Buscador";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
