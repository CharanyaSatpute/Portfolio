import Achievements from "../pages/Achievements";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { Routes,Route } from "react-router-dom";


function App(){
    return<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/achievements" element={<Achievements/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </>
}

export default App;