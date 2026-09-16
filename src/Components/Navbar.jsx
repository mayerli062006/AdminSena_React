import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [listadosAbierto, setListadosAbierto] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={{ backgroundColor: "#25c72f" }}
    >
      <div className="container-fluid">
        {/* LOGO Y NOMBRE */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "7px",
              padding: "5px",
              marginRight: "8px",
            }}
          >
            <img
              src="https://pautonoticias.com/sites/default/files/Article/sena-colombia-logo-green39a900png-20250120.png"
              alt="Logo SENA"
              width="52"
              height="52"
              className="img-fluid"
            />
          </div>

          <span className="fw-bold">Admin SENA</span>
        </Link>

        {/* BOTÓN RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menuNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* LISTADOS */}

            <li className="nav-item dropdown">
              <button
                className="btn btn-light dropdown-toggle ms-lg-3"
                onClick={() => setListadosAbierto(!listadosAbierto)}
              >
                Listados
              </button>

              {listadosAbierto && (
                <ul
                  className="dropdown-menu show"
                  style={{
                    position: "absolute",
                  }}
                >
                  <li>
                    <Link to="/aprendices" className="dropdown-item">
                      <i className="bi bi-people-fill me-2"></i>
                      Aprendices
                    </Link>
                  </li>

                  <li>
                    <Link to="/cursos" className="dropdown-item">
                      <i className="bi bi-book-fill me-2"></i>
                      Cursos
                    </Link>
                  </li>

                  <li>
                    <Link to="/computadores" className="dropdown-item">
                      <i className="bi bi-pc-display me-2"></i>
                      Computadores
                    </Link>
                  </li>

                  <li>
                    <Link to="/instructores" className="dropdown-item">
                      <i className="bi bi-person-workspace me-2"></i>
                      Instructores
                    </Link>
                  </li>

                  <li>
                    <Link to="/centros" className="dropdown-item">
                      <i className="bi bi-building me-2"></i>
                      Centros de formación
                    </Link>
                  </li>

                  <li>
                    <Link to="/areas" className="dropdown-item">
                      <i className="bi bi-diagram-3-fill me-2"></i>
                      Áreas
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* MISIÓN Y VISIÓN */}

            <li className="nav-item">
              <Link
                to="/mision-vision"
                className="nav-link fw-semibold ms-lg-3"
              >
                Misión y Visión
              </Link>
            </li>
          </ul>

          {/* BUSCADOR */}

          <form className="d-flex me-3" role="search">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-search text-success"></i>
              </span>

              <input
                type="search"
                className="form-control"
                placeholder="Buscar..."
              />

              <button className="btn btn-light fw-bold" type="submit">
                Buscar
              </button>
            </div>
          </form>

          {/* INICIAR SESIÓN */}

          <Link to="/login" className="btn btn-outline-light fw-bold">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
