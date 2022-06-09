import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Welcome from "./components/main/welcome/Welcome";

function App() {
  return (
    <DataProvider>
      <Header />
      <Welcome />
      <Gallery />
      <Footer />
    </DataProvider>
  );
}

export default App;
