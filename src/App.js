import "./App.css";
import Person from "./user/components/person";
import Man from "./user/components/man";
import Animal from "./user/components/animal";
import Cat from "./user/components/maleAnimal";
import Country from "./user/components/Country";
import City from "./user/components/City";
import CountryFun from "./user/components/CountryFun";
import Profile from "./user/components/profile";
import Counter from "./user/components/Counter";
import Medicine from "./user/containers/Medicine";
import Doctor from "./user/containers/Doctor";
import Timer from "./user/containers/Timer/Timer";


function App() {
  return (
    <>
      {/* <Person/> */}
      {/* <Man/> */}
      {/* <Animal/> */}
      {/* <Cat/> */}
      {/* <Country /> */}
      {/* <City /> */}
      {/* <CountryFun/> */}
      {/* <Profile name= {'MEET'} age={21} email={'meet@gmail.com'}/> */}
      {/* <Counter/> */}
      {/* <Counter/> */}
      {/* <Medicine /> */}
      {/* <Doctor /> */}
      <Timer />

    </>
  );
}

export default App;
