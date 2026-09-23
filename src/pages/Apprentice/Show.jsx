import React from "react";
import { Link, useParams } from "react-router-dom";

function ApprenticeShow() {

  // Obtener el ID desde la URL
  // Ejemplo: /aprendices/1
  const { id } = useParams();


  // =====================================================
  // DATOS TEMPORALES
  // =====================================================

  const apprentices = [
    {
      id: 1,
      name: "Mayerli",
      email: "mayerli@gmail.com",
      cell_number: "3001234567",
      course_id: 1,
      computer_id: 1,
    },
    {
      id: 2,
      name: "Enmanuel",
      email: "enmanuel@gmail.com",
      cell_number: "3012345678",
      course_id: 2,
      computer_id: 2,
    },
    {
      id: 3,
      name: "Estiven Quinayas",
      email: "estiven@gmail.com",
      cell_number: "3023456789",
      course_id: 1,
      computer_id: 3,
    },
  ];


  // =====================================================
  // BUSCAR EL APRENDIZ
  // =====================================================

  const apprentice = apprentices.find(
    (item) => item.id === Number(id)
  );


  // =====================================================
  // SI NO EXISTE
  // =====================================================

  if (!apprentice) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>
            Aprendiz no encontrado
          </h4>

          <p>
            No existe un aprendiz con el ID {id}.
          </p>

          <Link
            to="/aprendices"
            className="btn btn-success"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver a aprendices

          </Link>

        </div>

      </div>

    );

  }


  // =====================================================
  // MOSTRAR APRENDIZ
  // =====================================================

  return (

    <div className="container py-4">


      {/* =================================================
          ENCABEZADO
      ================================================== */}

      <div className="card border-0 shadow-sm mb-4">

        <div
          className="card-header text-white"
          style={{
            backgroundColor: "#25c72f"
          }}
        >

          <h2 className="mb-0">

            <i className="bi bi-person-fill me-2"></i>

            Información del Aprendiz

          </h2>

        </div>


        {/* =================================================
            INFORMACIÓN
        ================================================== */}

        <div className="card-body">

          <div className="row">


            {/* ID */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                ID:
              </label>

              <div className="form-control bg-light">

                {apprentice.id}

              </div>

            </div>


            {/* NOMBRE */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Nombre:
              </label>

              <div className="form-control bg-light">

                {apprentice.name}

              </div>

            </div>


            {/* EMAIL */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Email:
              </label>

              <div className="form-control bg-light">

                {apprentice.email}

              </div>

            </div>


            {/* TELÉFONO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Número de celular:
              </label>

              <div className="form-control bg-light">

                {apprentice.cell_number}

              </div>

            </div>


            {/* CURSO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Curso:
              </label>

              <div className="form-control bg-light">

                {apprentice.course_id}

              </div>

            </div>


            {/* EQUIPO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Equipo:
              </label>

              <div className="form-control bg-light">

                {apprentice.computer_id}

              </div>

            </div>

          </div>


          {/* =================================================
              BOTONES
          ================================================== */}

          <div className="mt-3">

            {/* VOLVER */}

            <Link
              to="/aprendices"
              className="btn btn-secondary me-2"
            >

              <i className="bi bi-arrow-left me-2"></i>

              Volver

            </Link>


            {/* EDITAR */}

            <Link
              to={`/aprendices/${apprentice.id}/edit`}
              className="btn btn-warning"
            >

              <i className="bi bi-pencil-fill me-2"></i>

              Editar

            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ApprenticeShow;