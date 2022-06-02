import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";

function App() {
  return (
    <DataProvider>
      <div className="bg-black min-h-screen grid grid-cols-1">
        <Gallery />
      </div>
    </DataProvider>
  );
}

export default App;
