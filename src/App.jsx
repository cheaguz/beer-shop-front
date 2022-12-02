import { NavBar } from "./Components/NavBar";
import { Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Nav } from './Components/Nav'

function App() {

const styles = {
  div : {
    height : '1200px'
  }
}

  return (
    <div style={styles.div}>
     <NavBar />
     <Nav />
        <Routes>
          <Route path="/" element={ <Home /> }/> 
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
    </div>
  )
}

export default App
