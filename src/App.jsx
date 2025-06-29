import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Block1 from "./components/block1";
import Block2 from "./components/block2";
import Block3 from "./components/block3";
import Footer from "./components/footer";
import Background from "./components/background";
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Block1/>
        <Block2/>
        <Block3/>
        <Background/>
        <Footer/>
      </div>
    </>
  )
}

export default App
