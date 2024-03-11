// import Person from "./user/components/person";
// import Man from "./user/components/man";
// import Animal from "./user/components/animal";
// import Cat from "./user/components/maleAnimal";
// import Country from "./user/components/Country";
// import City from "./user/components/City";
// import CountryFun from "./user/components/CountryFun";
// import Profile from "./user/components/profile";
// import Counter from "./user/components/Counter";
// import Medicine from "./user/containers/Medicine";
// import Doctor from "./user/containers/Doctor";
// import Timer from "./user/containers/Timer/Timer";
// import TimerFun from "./user/containers/Timer/TimerFun";
import Products from "./user/containers/Prosucts_list/Products";
import "bootstrap/dist/css/bootstrap.min.css";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   setTimeout(() => {
//     setIsLoading(false);
//   }, 2000);

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
      {/* <Timer /> */}
      {/* <TimerFun /> */}
      <Products />
{/* 
      <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            {isLoading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div>
                    <h3>
                        React Example to Implemet Loader
                        using react-loader-spinner
                    </h3>
                </div>
            )} */}
    </>
  );
}

export default App;
