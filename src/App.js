import logo from "./logo.svg";
import "./App.css";

function App() {
  const prviString = "Prvi";
  const drugiString = "Drugi";
  return (
    <>
      <p>Neki proizvoljan tekst</p>
      <p>Jos neki tekst + {prviString}</p>
      <p>{prviString + " " + drugiString}</p>
    </>
  );
}

export default App;
