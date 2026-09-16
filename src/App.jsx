import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import ApprenticeCreate from "./pages/Apprentice/Create.jsx";
import ApprenticeIndex from "./pages/Apprentice/Index.jsx";
import ApprenticeEdit from "./pages/Apprentice/Edit.jsx";
import ApprenticeShow from "./pages/Apprentice/Show.jsx";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/aprendices" element={<ApprenticeCreate/>} />
          <Route path="/aprendices" element={<ApprenticeIndex/>}  />  
          <Route path="/aprendices" element={<ApprenticeEdit/>} />
          <Route path="/aprendices" element={<ApprenticeShow/>} />
          </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
