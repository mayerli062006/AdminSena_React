import React, { useState } from "react";
import { Link } from "react-router-dom";

function Create() {
  // ==========================================
  // ESTADOS DEL FORMULARIO
  // ==========================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellNumber, setCellNumber] = useState("");
  const [courseId, setCourseId] = useState("");
  const [computerId, setComputerId] = useState("");

  // ==========================================
  // CURSOS
  // Por ahora son datos de ejemplo.
  // Después vendrán desde la API.
  // ==========================================

  const courses = [
    {
      id: 1,
      name_curso: "Análisis y Desarrollo de Software",
    },
    {
      id: 2,
      name_curso: "Gestión Administrativa",
    },
    {
      id: 3,
      name_curso: "Contabilidad",
    },
  ];

  // ==========================================
  // EQUIPOS
  // Por ahora son datos de ejemplo.
  // Después vendrán desde la API.
  // ==========================================

  const computers = [
    {
      id: 1,
      numero: "Equipo 1",
    },
    {
      id: 2,
      numero: "Equipo 2",
    },
    {
      id: 3,
      numero: "Equipo 3",
    },
    {
      id: 4,
      numero: "Equipo 4",
    },
  ];

  // ==========================================
  // ENVIAR FORMULARIO
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    // Por ahora mostramos los datos en consola.
    // Más adelante aquí conectaremos la API de Laravel.

    console.log({
      name: name,
      email: email,
      cell_number: cellNumber,
      course_id: courseId,
      computer_id: computerId,
    });

    alert("Formulario enviado correctamente");
  };

  return (
    <div className="container py-5">
      {/* ========================================== */}
      {/* ENCABEZADO */}
      {/* ========================================== */}

      <div className="mb-4">
        <h1 className="fw-bold" style={{ color: "#16780c" }}>
          <i className="bi bi-person-plus-fill me-2"></i>
          Formulario Aprendices
        </h1>

        <p className="text-muted">Registra la información del nuevo aprendiz</p>
      </div>

      {/* ========================================== */}
      {/* TARJETA DEL FORMULARIO */}
      {/* ========================================== */}

      <div className="card border-0 shadow-sm">
        {/* CABECERA */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#16780c" }}
        >
          <h5 className="mb-0">
            <i className="bi bi-person-vcard-fill me-2"></i>
            Información del aprendiz
          </h5>
        </div>

        {/* CUERPO */}

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* ========================================== */}
              {/* NOMBRE */}
              {/* ========================================== */}

              <div className="col-md-6">
                <label className="form-label fw-bold">Nombre:</label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>

                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingrese el nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ========================================== */}
              {/* EMAIL */}
              {/* ========================================== */}

              <div className="col-md-6">
                <label className="form-label fw-bold">Email:</label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>

                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Ingrese el correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ========================================== */}
              {/* NÚMERO DE TELÉFONO */}
              {/* ========================================== */}

              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Número de teléfono:
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-telephone-fill"></i>
                  </span>

                  <input
                    type="number"
                    name="cell_number"
                    className="form-control"
                    placeholder="Ingrese el número"
                    value={cellNumber}
                    onChange={(e) => setCellNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ========================================== */}
              {/* CURSO */}
              {/* ========================================== */}

              <div className="col-md-6">
                <label htmlFor="course_id" className="form-label fw-bold">
                  Curso:
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-book-fill"></i>
                  </span>

                  <select
                    name="course_id"
                    id="course_id"
                    className="form-select"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    required
                  >
                    <option value="">Seleccione un curso</option>

                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name_curso}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ========================================== */}
              {/* EQUIPO */}
              {/* ========================================== */}

              <div className="col-md-6">
                <label htmlFor="computer_id" className="form-label fw-bold">
                  Equipo:
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-pc-display"></i>
                  </span>

                  <select
                    name="computer_id"
                    id="computer_id"
                    className="form-select"
                    value={computerId}
                    onChange={(e) => setComputerId(e.target.value)}
                    required
                  >
                    <option value="">Seleccione un equipo</option>

                    {computers.map((computer) => (
                      <option key={computer.id} value={computer.id}>
                        {computer.numero}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ========================================== */}
            {/* BOTONES */}
            {/* ========================================== */}

            <hr className="my-4" />

            <div className="d-flex justify-content-end gap-2">
              {/* VOLVER */}

              <Link to="/aprendices" className="btn btn-secondary">
                <i className="bi bi-arrow-left me-1"></i>
                Volver
              </Link>

              {/* ENVIAR */}

              <button
                type="submit"
                className="btn text-white"
                style={{ backgroundColor: "#16780c" }}
              >
                <i className="bi bi-check-circle-fill me-1"></i>
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
