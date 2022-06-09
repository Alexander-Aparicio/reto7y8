import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";
  import Welcome from "./components/main/welcome/Welcome";
  import FormSearch from "./components/main/welcome/FormSearch";

function App() {
  return (
    <DataProvider>
    <Welcome/>
      <Gallery />
    {window.matchMedia("(min-width: 450px)").matches ? null : <FormSearch/>}
    </DataProvider>
  );
}

export default App;
