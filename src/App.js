import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <DataProvider>
      <Header />
      <Gallery />
      <Footer />
    </DataProvider>
  );
}

export default App;
