import React, { useState } from "react";
import { Link } from "react-router-dom";

function TeacherCreate() {

  // =========================================
  // ESTADOS DEL FORMULARIO
  // =========================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");


  // =========================================
  // GUARDAR INSTRUCTOR
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Instructor creado correctamente:\n\n` +
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `Celular: ${cell}`
    );

  };


  return (

    <div className="container py-4">

      <div className="card shadow-sm border-0">

        {/* =========================================
            ENCABEZADO
        ========================================== */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >

          <h3 className="mb-0">

            <i className="bi bi-person-plus-fill me-2"></i>

            Nuevo Instructor

          </h3>

        </div>


        {/* =========================================
            FORMULARIO
        ========================================== */}

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NOMBRE */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Nombre completo:
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Ejemplo: Carlos Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>


            {/* CORREO */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Correo electrónico:
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="Ejemplo: carlos.perez@sena.edu.co"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* CELULAR */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Celular:
              </label>

              <input
                type="tel"
                className="form-control"
                placeholder="Ejemplo: 3001234567"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
                required
              />

            </div>


            {/* GUARDAR */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{ backgroundColor: "#25c72f" }}
            >

              <i className="bi bi-save-fill me-2"></i>

              Guardar Instructor

            </button>


            {/* VOLVER */}

            <Link
              to="/instructores"
              className="btn btn-secondary"
            >

              <i className="bi bi-arrow-left me-2"></i>

              Volver

            </Link>

          </form>

        </div>

      </div>

    </div>

  );
}

export default TeacherCreate;