import "./App.css";
import Person from "./user/components/person";
import Man from "./user/components/man";
import Animal from "./user/components/animal";
import Cat from "./user/components/maleAnimal";
import Country from "./user/components/Country";
import City from "./user/components/City";
import CountryFun from "./user/components/CountryFun";

function App() {
  return (
    <>
      <Person/>
      <Man/>
      <Animal/>
      <Cat/>
      <Country/>
      <City/>
      <CountryFun/>
    </>
  );
}

export default App;
