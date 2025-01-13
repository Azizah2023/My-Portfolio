import Footer from "./components/footer";
import AnimatedCards from "./components/user/card";
// import Card from "./components/user/card";

function App() {
  return (
    <div className="App">
      <h1 className="mt-10 text-center text-3xl sm:text-2xl md:text-xl lg:text-lg xl:text-lg mx-auto my-auto">
        My Project
      </h1>
      <AnimatedCards />
      <Footer />
    </div>
  );
}

export default App;
