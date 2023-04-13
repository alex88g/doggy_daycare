import Welcome from "./components/Welcome"
import Home from "./components/Home"
import SingleDog from "./components/SingleDog"
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        
        
          <HashRouter>
              <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/:index" element={<SingleDog />}></Route>
              </Routes>
              </HashRouter>
      </>
    )
}

export default App