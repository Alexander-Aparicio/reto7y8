import FormSearch from "./components/main/welcome/FormSearch";
import Welcome from "./components/main/welcome/Welcome";


function App() {
  return (
    <div className="App">
      <Welcome/>
      {window.matchMedia("(min-width: 450px)").matches ? null : <FormSearch/>}
    </div>
  );
}

export default App;
