import { useState } from "react";
import Navbar from "./components/nav/Navbar";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Testimonials from "./pages/Testimonials";
import Projects from "./pages/Projects";
import Footer from "./components/footer/footer";
import { Routes , Route, Navigate} from 'react-router-dom';

function App() {
  let [selectedPage, setSelectedPage] = useState("home");
  return (
    <div className="app flex flex-col items-center">
      <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </Layout>
      <Footer />     
    </div>
  )
}

export default App;
