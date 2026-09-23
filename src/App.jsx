    import React from "react";
    import { BrowserRouter, Routes, Route } from "react-router-dom";

    import Navbar from "./Components/Navbar.jsx";
    import Footer from "./Components/Footer.jsx";

    // =========================================
    // IMPORTS DE APRENDICES
    // =========================================
    import ApprenticeCreate from "./pages/Apprentice/Create.jsx";
    import ApprenticeIndex from "./pages/Apprentice/Index.jsx";
    import ApprenticeEdit from "./pages/Apprentice/Edit.jsx";
    import ApprenticeShow from "./pages/Apprentice/Show.jsx";

    // =========================================
    // IMPORTS DE ÁREAS
    // =========================================
    import AreaCreate from "./pages/Area/Create.jsx";
    import AreaIndex from "./pages/Area/Index.jsx";
    import AreaEdit from "./pages/Area/Edit.jsx";
    import AreaShow from "./pages/Area/Show.jsx";

    // =========================================
    // IMPORTS DE CURSOS
    // =========================================
    import CourseCreate from "./pages/Course/Create.jsx";
    import CourseIndex from "./pages/Course/Index.jsx";
    import CourseEdit from "./pages/Course/Edit.jsx";
    import CourseShow from "./pages/Course/Show.jsx";

    // =========================================
    // IMPORTS DE COMPUTADORES
    // =========================================
    import ComputerCreate from "./pages/Computer/Create.jsx";
    import ComputerIndex from "./pages/Computer/Index.jsx";
    import ComputerEdit from "./pages/Computer/Edit.jsx";
    import ComputerShow from "./pages/Computer/Show.jsx";

    // =========================================
    // IMPORTS DE INSTRUCTORES
    // =========================================
    import TeacherCreate from "./pages/Teacher/Create.jsx";
    import TeacherIndex from "./pages/Teacher/Index.jsx";
    import TeacherEdit from "./pages/Teacher/Edit.jsx";
    import TeacherShow from "./pages/Teacher/Show.jsx";

    // =========================================
    // IMPORT DE HOME
    // =========================================
    import Home from "./pages/Home";


    function App() {

      return (

        <BrowserRouter>

          {/* =========================================
              NAVBAR
          ========================================== */}

          <Navbar />


          {/* =========================================
              CONTENIDO PRINCIPAL
          ========================================== */}

          <main>

            <Routes>


              {/* =========================================
                  ================= INICIO ================
              ========================================== */}

              <Route
                path="/"
                element={<Home />}
              />


              {/* =========================================
                  ============== APRENDICES ===============
              ========================================== */}

              {/* LISTA DE APRENDICES
                  /aprendices
              */}

              <Route
                path="/aprendices"
                element={<ApprenticeIndex />}
              />


              {/* CREAR APRENDIZ
                  /aprendices/create
              */}

              <Route
                path="/aprendices/create"
                element={<ApprenticeCreate />}
              />


              {/* MOSTRAR APRENDIZ
                  /aprendices/1
              */}

              <Route
                path="/aprendices/:id"
                element={<ApprenticeShow />}
              />


              {/* EDITAR APRENDIZ
                  /aprendices/1/edit
              */}

              <Route
                path="/aprendices/:id/edit"
                element={<ApprenticeEdit />}
              />


              {/* =========================================
                  ================= ÁREAS =================
              ========================================== */}

              {/* LISTA DE ÁREAS
                  /areas
              */}

              <Route
                path="/areas"
                element={<AreaIndex />}
              />


              {/* CREAR ÁREA
                  /areas/create
              */}

              <Route
                path="/areas/create"
                element={<AreaCreate />}
              />


              {/* MOSTRAR ÁREA
                  /areas/1
              */}

              <Route
                path="/areas/:id"
                element={<AreaShow />}
              />


              {/* EDITAR ÁREA
                  /areas/1/edit
              */}

              <Route
                path="/areas/:id/edit"
                element={<AreaEdit />}
              />


              {/* =========================================
                  ================= CURSOS ================
              ========================================== */}

              {/* LISTA DE CURSOS
                  /cursos
              */}

              <Route
                path="/cursos"
                element={<CourseIndex />}
              />


              {/* CREAR CURSO
                  /cursos/create
              */}

              <Route
                path="/cursos/create"
                element={<CourseCreate />}
              />


              {/* MOSTRAR CURSO
                  /cursos/1
              */}

              <Route
                path="/cursos/:id"
                element={<CourseShow />}
              />


              {/* EDITAR CURSO
                  /cursos/1/edit
              */}

              <Route
                path="/cursos/:id/edit"
                element={<CourseEdit />}
              />


              {/* =========================================
                  ============== COMPUTADORES =============
              ========================================== */}

              {/* LISTA DE COMPUTADORES
                  /computadores
              */}

              <Route
                path="/computadores"
                element={<ComputerIndex />}
              />


              {/* CREAR COMPUTADOR
                  /computadores/create
              */}

              <Route
                path="/computadores/create"
                element={<ComputerCreate />}
              />


              {/* MOSTRAR COMPUTADOR
                  /computadores/1
              */}

              <Route
                path="/computadores/:id"
                element={<ComputerShow />}
              />


              {/* EDITAR COMPUTADOR
                  /computadores/1/edit
              */}

              <Route
                path="/computadores/:id/edit"
                element={<ComputerEdit />}
              />


              {/* =========================================
                  ============== INSTRUCTORES =============
              ========================================== */}

              {/* LISTA DE INSTRUCTORES
                  /instructores
              */}

              <Route
                path="/instructores"
                element={<TeacherIndex />}
              />


              {/* CREAR INSTRUCTOR
                  /instructores/create
              */}

              <Route
                path="/instructores/create"
                element={<TeacherCreate />}
              />


              {/* MOSTRAR INSTRUCTOR
                  /instructores/1
              */}

              <Route
                path="/instructores/:id"
                element={<TeacherShow />}
              />


              {/* EDITAR INSTRUCTOR
                  /instructores/1/edit
              */}

              <Route
                path="/instructores/:id/edit"
                element={<TeacherEdit />}
              />


            </Routes>

          </main>


          {/* =========================================
              FOOTER
          ========================================== */}

          <Footer />


        </BrowserRouter>

      );

    }


    export default App;