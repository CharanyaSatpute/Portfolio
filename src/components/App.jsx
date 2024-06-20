import Achievements from "../pages/Achievements";
import CertificateViewer from "../pages/CertificateViewer";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import WorkExperience from "../pages/WorkExperience";

import Navbar from "./Navbar";
import { Routes,Route } from "react-router-dom";


function App(){
    return<>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/achievements" element={<Achievements/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/workExperience" element={<WorkExperience/>}></Route>
            <Route path="/achievements/:name" element={<CertificateViewer/>}/>
        </Routes>
    </>
}

export default App;