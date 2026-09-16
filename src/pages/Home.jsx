import React from "react";
import "./Home.css";

// IMPORTAMOS LAS IMÁGENES DESDE src/assets
import sena1 from "../assets/sena1.jpg";
import sena2 from "../assets/sena2.jpg";
import sena3 from "../assets/sena3.jpg";

function Home() {
  return (
    <>
      {/* ================================================= */}
      {/* CARRUSEL */}
      {/* ================================================= */}

      <div className="container py-4">
        <div
          id="carouselSena"
          className="carousel slide shadow rounded overflow-hidden"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* ================================================= */}
          {/* INDICADORES */}
          {/* ================================================= */}

          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselSena"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Imagen 1"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselSena"
              data-bs-slide-to="1"
              aria-label="Imagen 2"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselSena"
              data-bs-slide-to="2"
              aria-label="Imagen 3"
            ></button>
          </div>

          {/* ================================================= */}
          {/* IMÁGENES */}
          {/* ================================================= */}

          <div className="carousel-inner">
            {/* ================= IMAGEN 1 ================= */}

            <div className="carousel-item active">
              <img src={sena1} className="d-block w-100" alt="SENA imagen 1" />

              <div className="carousel-caption d-none d-md-block">
                <h1 className="fw-bold">Bienvenido al Sistema SENA</h1>

                <p className="fw-semibold mb-0">
                  Administración de aprendices, cursos y equipos
                </p>
              </div>
            </div>

            {/* ================= IMAGEN 2 ================= */}

            <div className="carousel-item">
              <img src={sena2} className="d-block w-100" alt="SENA imagen 2" />

              <div className="carousel-caption d-none d-md-block">
                <h1 className="fw-bold">Bienvenido al Sistema SENA</h1>

                <p className="fw-semibold mb-0">
                  Administración de aprendices, cursos y equipos
                </p>
              </div>
            </div>

            {/* ================= IMAGEN 3 ================= */}

            <div className="carousel-item">
              <img src={sena3} className="d-block w-100" alt="SENA imagen 3" />

              <div className="carousel-caption d-none d-md-block">
                <h1 className="fw-bold">Bienvenido al Sistema SENA</h1>

                <p className="fw-semibold mb-0">
                  Administración de aprendices, cursos y equipos
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* BOTÓN ANTERIOR */}
          {/* ================================================= */}

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselSena"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">Anterior</span>
          </button>

          {/* ================================================= */}
          {/* BOTÓN SIGUIENTE */}
          {/* ================================================= */}

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselSena"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* RESUMEN DEL SISTEMA */}
      {/* ================================================= */}

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#16780c" }}>
            Resumen del sistema SENA
          </h2>

          <p className="text-muted">
            Información general de los registros del sistema
          </p>
        </div>

        <div className="row g-4">
          {/* ================================================= */}
          {/* CURSOS */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-book-fill"></i>
                </div>

                <h4 className="fw-bold">Cursos</h4>

                <h2 className="numero">4</h2>

                <p className="text-muted mb-0">cursos registrados</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* COMPUTADORES */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-pc-display"></i>
                </div>

                <h4 className="fw-bold">Computadores</h4>

                <h2 className="numero">7</h2>

                <p className="text-muted mb-0">computadores registrados</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* APRENDICES */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-people-fill"></i>
                </div>

                <h4 className="fw-bold">Aprendices</h4>

                <h2 className="numero">3</h2>

                <p className="text-muted mb-0">aprendices registrados</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* INSTRUCTORES */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-person-workspace"></i>
                </div>

                <h4 className="fw-bold">Instructores</h4>

                <h2 className="numero">5</h2>

                <p className="text-muted mb-0">instructores registrados</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* CENTROS */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-building-fill"></i>
                </div>

                <h4 className="fw-bold">Centros de formación</h4>

                <h2 className="numero">2</h2>

                <p className="text-muted mb-0">centros registrados</p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ÁREAS */}
          {/* ================================================= */}

          <div className="col-md-6 col-lg-4">
            <div className="card resumen-card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="icono-card">
                  <i className="bi bi-diagram-3-fill"></i>
                </div>

                <h4 className="fw-bold">Áreas</h4>

                <h2 className="numero">4</h2>

                <p className="text-muted mb-0">áreas registradas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ANUNCIOS Y NOVEDADES */}
      {/* ================================================= */}

      <div className="container pb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#16780c" }}>
            <i className="bi bi-megaphone-fill me-2"></i>
            Anuncios y novedades
          </h2>

          <p className="text-muted">Información importante del sistema SENA</p>
        </div>

        <div className="row g-4">
          {/* ================================================= */}
          {/* ANUNCIO 1 */}
          {/* ================================================= */}

          <div className="col-md-4">
            <div className="card anuncio-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="anuncio-icono">
                  <i className="bi bi-info-circle-fill"></i>
                </div>

                <h5 className="fw-bold mt-3">Información importante</h5>

                <p className="text-muted">
                  Consulta constantemente las novedades y actualizaciones del
                  sistema administrativo.
                </p>

                <span className="badge bg-success">Información</span>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ANUNCIO 2 */}
          {/* ================================================= */}

          <div className="col-md-4">
            <div className="card anuncio-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="anuncio-icono">
                  <i className="bi bi-book-fill"></i>
                </div>

                <h5 className="fw-bold mt-3">Ofertas educativas</h5>

                <p className="text-muted">
                  Conoce los cursos y programas de formación disponibles en el
                  SENA.
                </p>

                <span className="badge bg-success">Educación</span>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ANUNCIO 3 */}
          {/* ================================================= */}

          <div className="col-md-4">
            <div className="card anuncio-card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="anuncio-icono">
                  <i className="bi bi-calendar-event-fill"></i>
                </div>

                <h5 className="fw-bold mt-3">Fechas importantes</h5>

                <p className="text-muted">
                  Mantente atento a las fechas de inscripción, formación y
                  actividades.
                </p>

                <span className="badge bg-success">Novedad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
