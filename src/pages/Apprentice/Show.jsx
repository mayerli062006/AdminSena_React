import React from "react";
import { Link, useParams } from "react-router-dom";

function ApprenticeShow() {

  // Obtenemos el ID que viene en la URL
  // Ejemplo: /aprendices/1
  const { id } = useParams();

  // Datos temporales
  // Más adelante estos datos vendrán desde la API
  const apprentices = [
    {
      id: 1,
      name: "Mayerli Maca",
      email: "mayerli@gmail.com",
      cell_number: "3001234567",
      course_id: 1,
      computer_id: 1,
      created_at: "2026-09-10T08:30:00",
      updated_at: "2026-09-15T10:20:00",
    },
    {
      id: 2,
      name: "Enmanuel",
      email: "enmanuel@gmail.com",
      cell_number: "3012345678",
      course_id: 2,
      computer_id: 2,
      created_at: "2026-09-11T09:00:00",
      updated_at: "2026-09-15T11:00:00",
    },
    {
      id: 3,
      name: "Estiven Quinayas",
      email: "estiven@gmail.com",
      cell_number: "3023456789",
      course_id: 1,
      computer_id: 3,
      created_at: "2026-09-12T10:15:00",
      updated_at: "2026-09-16T08:45:00",
    },
  ];

  // Buscamos el aprendiz según el ID de la URL
  const apprentice = apprentices.find(
    (item) => item.id === Number(id)
  );

  // Si no existe el aprendiz
  if (!apprentice) {
    return (
      <div className="container mt-5">

        <div className="alert alert-danger shadow-sm">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Aprendiz no encontrado.
        </div>

        <Link
          to="/aprendices"
          className="btn text-white"
          style={{ backgroundColor: "#16780c" }}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Volver
        </Link>

      </div>
    );
  }

  // Función para mostrar la fecha de una manera más bonita
  const formatDate = (date) => {
    return new Date(date).toLocaleString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mt-5">

      {/* ================================================= */}
      {/* TARJETA PRINCIPAL */}
      {/* ================================================= */}

      <div className="card shadow-lg border-0">

        {/* ================================================= */}
        {/* ENCABEZADO */}
        {/* ================================================= */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#16780c" }}
        >

          <h3 className="mb-0">

            <i className="bi bi-person-fill me-2"></i>

            {apprentice.name}

          </h3>

        </div>

        {/* ================================================= */}
        {/* CUERPO */}
        {/* ================================================= */}

        <div className="card-body">

          {/* ================================================= */}
          {/* ID - CURSO - COMPUTADOR */}
          {/* ================================================= */}

          <div className="row">

            {/* ID */}

            <div className="col-md-6 mb-3">

              <label className="fw-bold">
                ID
              </label>

              <div className="form-control bg-light">
                {apprentice.id}
              </div>

            </div>

            {/* CURSO */}

            <div className="col-md-6 mb-3">

              <label className="fw-bold">
                Curso
              </label>

              <div className="form-control bg-light">
                {apprentice.course_id}
              </div>

            </div>

            {/* COMPUTADOR */}

            <div className="col-md-6 mb-3">

              <label className="fw-bold">
                Computador
              </label>

              <div className="form-control bg-light">
                {apprentice.computer_id}
              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* NOMBRE */}
          {/* ================================================= */}

          <div className="mb-3">

            <label className="fw-bold">
              Nombre
            </label>

            <div className="form-control bg-light">

              <i
                className="bi bi-person-fill me-2"
                style={{ color: "#16780c" }}
              ></i>

              {apprentice.name}

            </div>

          </div>

          {/* ================================================= */}
          {/* EMAIL */}
          {/* ================================================= */}

          <div className="mb-3">

            <label className="fw-bold">
              Email
            </label>

            <div className="form-control bg-light">

              <i
                className="bi bi-envelope-fill me-2"
                style={{ color: "#16780c" }}
              ></i>

              {apprentice.email}

            </div>

          </div>

          {/* ================================================= */}
          {/* CELULAR */}
          {/* ================================================= */}

          <div className="mb-3">

            <label className="fw-bold">
              Número de Celular
            </label>

            <div className="form-control bg-light">

              <i
                className="bi bi-telephone-fill me-2"
                style={{ color: "#16780c" }}
              ></i>

              {apprentice.cell_number}

            </div>

          </div>

          <hr />

          {/* ================================================= */}
          {/* FECHAS */}
          {/* ================================================= */}

          <div className="row">

            {/* FECHA DE CREACIÓN */}

            <div className="col-md-6">

              <label className="fw-bold">
                Fecha de creación
              </label>

              <div className="form-control bg-light">

                <i
                  className="bi bi-calendar-plus-fill me-2"
                  style={{ color: "#16780c" }}
                ></i>

                {formatDate(apprentice.created_at)}

              </div>

            </div>

            {/* ÚLTIMA ACTUALIZACIÓN */}

            <div className="col-md-6">

              <label className="fw-bold">
                Última actualización
              </label>

              <div className="form-control bg-light">

                <i
                  className="bi bi-calendar-check-fill me-2"
                  style={{ color: "#16780c" }}
                ></i>

                {formatDate(apprentice.updated_at)}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* BOTÓN VOLVER */}
      {/* ================================================= */}

      <div className="d-flex justify-content-end mt-4 mb-4">

        <Link
          to="/aprendices"
          className="btn text-white"
          style={{ backgroundColor: "#16780c" }}
        >

          <i className="bi bi-arrow-left me-2"></i>

          Volver

        </Link>

      </div>

    </div>
  );
}

export default ApprenticeShow;