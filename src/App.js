import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";

function App() {
  return (
    <DataProvider>
      <Gallery />
    </DataProvider>
  );
}

export default App;
