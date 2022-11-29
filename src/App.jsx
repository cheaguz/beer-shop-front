import { NavBar } from "./Components/NavBar";
import { Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact'

function App() {



  return (
    <>
     <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> }/> 
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
    </>
  )
}

export default App
