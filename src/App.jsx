import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Client from "./components/clients/Client"
import Financy from "./components/financy/Financy"
import Last from "./components/footer last/Last"
import Footer from "./components/footer/Footer"
import Linked from "./components/linked/Linked"
import Menu from "./components/menu/Menu"
import Payment from "./components/receive payment/Payment"
import Track from "./components/track/Track"
import Why from "./components/why/Why"

function App() {


  return (
    <>
     <Menu/>
      <Banner/>
      <About/>
      <Payment/>
      <Linked/>
      <Client/>
      <Financy/>
      <Why/>
      <Track/>
      <Footer/>
      <Last/>
    </>
  )
}

export default App
