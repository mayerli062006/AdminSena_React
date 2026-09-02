import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuAbierto, setMenuAbierto] = useState(false);
    const [listadosAbierto, setListadosAbierto] = useState(false);

    return (

        <nav
            className="navbar navbar-expand-lg navbar-dark shadow"
            style={{ backgroundColor: "#25c72f" }}
        >

            <div className="container-fluid">


                {/* LOGO SENA */}

                <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/"
                >

                    <span className="bg-white rounded p-1 me-2">

                        <img
                            src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
                            alt="Logo SENA"
                            width="50"
                            height="50"
                            className="img-fluid"
                        />

                    </span>


                    <span className="text-white fw-bold">
                        Admin SENA
                    </span>

                </Link>


                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-expanded={menuAbierto}
                >

                    <span className="navbar-toggler-icon"></span>

                </button>



                <div
                    className={`collapse navbar-collapse ${
                        menuAbierto ? "show" : ""
                    }`}
                >



                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center gap-lg-2 ms-lg-3">


                        {/* LISTADOS */}

                        <li className="nav-item dropdown">

                            <button
                                className="btn btn-light dropdown-toggle text-dark fw-medium px-3"
                                onClick={() =>
                                    setListadosAbierto(!listadosAbierto)
                                }
                            >

                                Listados

                            </button>


                            {listadosAbierto && (

                                <ul className="dropdown-menu show shadow-sm border-0 mt-2">

                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/areas"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Áreas
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/centros"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Centros
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/computadores"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Computadores
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/cursos"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Cursos
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/instructores"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Instructores
                                        </Link>
                                    </li>


                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/aprendices"
                                            onClick={() => setMenuAbierto(false)}
                                        >
                                            Aprendices
                                        </Link>
                                    </li>

                                </ul>

                            )}

                        </li>



                        {/* MISIÓN Y VISIÓN */}

                        <li className="nav-item">

                            <Link
                                className="nav-link text-white fw-semibold"
                                to="/mision-vision"
                                onClick={() => setMenuAbierto(false)}
                            >

                                Misión y Visión

                            </Link>

                        </li>

                    </ul>


                    <div className="d-flex align-items-center gap-3">


                        <form
                            className="d-flex align-items-center m-0"
                            role="search"
                        >

                            <div className="input-group">

                                <span className="input-group-text bg-white border-end-0">

                                    <i className="bi bi-search text-success"></i>

                                </span>


                                <input
                                    className="form-control border-start-0"
                                    type="search"
                                    placeholder="Buscar..."
                                    aria-label="Buscar"
                                />


                                <button
                                    className="btn btn-light text-success fw-bold border"
                                    type="submit"
                                >

                                    Buscar

                                </button>

                            </div>

                        </form>


                        <Link
                            to="/login"
                            className="btn btn-outline-light fw-bold px-3"
                            onClick={() => setMenuAbierto(false)}
                        >

                            Iniciar Sesión

                        </Link>


                    </div>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;