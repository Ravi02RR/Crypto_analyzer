

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Home from "./Components/Home"
import Exchanges from "./Components/Exchanges"
import Coins from "./Components/Coins"
import CoinDetails from "./Components/CoinDetails"
import Nav from "./Components/Nav"
function App() {
  

  return (
    <>
    <Router>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Exchanges" element={<Exchanges></Exchanges>}></Route>
        <Route path="/Coins" element={<Coins></Coins>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
