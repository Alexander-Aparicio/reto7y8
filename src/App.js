import { DataProvider } from "./context/DataContext";
import Gallery from "./components/main/gallery/Gallery";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Welcome from "./components/main/welcome/Welcome";
import FormSearch from "./components/main/welcome/FormSearch";

function App() {
  return (
    <DataProvider>
      <Header />
      <Gallery />
      <Footer />
      <Welcome />
      <Gallery />
      {window.matchMedia("(min-width: 450px)").matches ? null : <FormSearch />}
    </DataProvider>
  );
}

export default App;
