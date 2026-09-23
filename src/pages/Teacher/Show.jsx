import React from "react";
import { Link, useParams } from "react-router-dom";

function TeacherShow() {

  const { id } = useParams();


  // =========================================
  // DATOS DE PRUEBA
  // =========================================

  const teachers = [
    {
      id: 1,
      name: "Carlos Pérez",
      email: "carlos.perez@sena.edu.co",
      cell: "3001234567",
    },
    {
      id: 2,
      name: "María González",
      email: "maria.gonzalez@sena.edu.co",
      cell: "3019876543",
    },
    {
      id: 3,
      name: "Juan Rodríguez",
      email: "juan.rodriguez@sena.edu.co",
      cell: "3024567890",
    },
  ];


  // =========================================
  // BUSCAR INSTRUCTOR
  // =========================================

  const teacher = teachers.find(
    (item) => item.id === Number(id)
  );


  // =========================================
  // SI NO EXISTE
  // =========================================

  if (!teacher) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>
            Instructor no encontrado
          </h4>

          <p>
            No existe un instructor con el ID {id}.
          </p>

          <Link
            to="/instructores"
            className="btn btn-success"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver a instructores

          </Link>

        </div>

      </div>

    );

  }


  return (

    <div className="container py-4">

      <div className="card shadow-sm border-0">

        {/* ENCABEZADO */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >

          <h3 className="mb-0">

            <i className="bi bi-person-vcard-fill me-2"></i>

            Información del Instructor

          </h3>

        </div>


        {/* INFORMACIÓN */}

        <div className="card-body">

          <div className="row">

            {/* ID */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                ID:
              </label>

              <div className="form-control bg-light">
                {teacher.id}
              </div>

            </div>


            {/* NOMBRE */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Nombre:
              </label>

              <div className="form-control bg-light">
                {teacher.name}
              </div>

            </div>


            {/* CORREO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Correo electrónico:
              </label>

              <div className="form-control bg-light">
                {teacher.email}
              </div>

            </div>


            {/* CELULAR */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Celular:
              </label>

              <div className="form-control bg-light">
                {teacher.cell}
              </div>

            </div>

          </div>


          {/* VOLVER */}

          <Link
            to="/instructores"
            className="btn btn-secondary me-2"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver

          </Link>


          {/* EDITAR */}

          <Link
            to={`/instructores/${teacher.id}/edit`}
            className="btn btn-warning"
          >

            <i className="bi bi-pencil-fill me-2"></i>

            Editar

          </Link>

        </div>

      </div>

    </div>

  );
}

export default TeacherShow;