import React from "react";
import { Link } from "react-router-dom";

function TeacherIndex() {

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


  return (
    <div className="container py-4">

      {/* =========================================
          ENCABEZADO
      ========================================== */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h1 className="fw-bold mb-1">

            <i
              className="bi bi-person-workspace me-2"
              style={{ color: "#25c72f" }}
            ></i>

            LISTA DE INSTRUCTORES

          </h1>

          <p className="text-muted mb-2">
            Administración y consulta de instructores
          </p>

          <p className="mb-3">
            En esta sección puedes consultar y administrar los
            instructores registrados en el sistema SENA.
          </p>


          {/* NUEVO INSTRUCTOR */}

          <Link
            to="/instructores/create"
            className="btn btn-sm text-white"
            style={{ backgroundColor: "#25c72f" }}
          >

            <i className="bi bi-plus-circle-fill me-1"></i>

            Nuevo Instructor

          </Link>

        </div>

      </div>


      {/* =========================================
          TABLA
      ========================================== */}

      <div className="card shadow-sm border-0">

        <div className="card-body">

          {/* ENCABEZADO DE TABLA */}

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h3 className="fw-bold mb-1">

                <i
                  className="bi bi-people-fill me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                Instructores registrados

              </h3>

              <p className="text-muted mb-0">
                Información de los instructores del sistema
              </p>

            </div>


            {/* CANTIDAD */}

            <span
              className="badge rounded-pill"
              style={{ backgroundColor: "#25c72f" }}
            >
              {teachers.length} registros
            </span>

          </div>


          {/* TABLA */}

          <div className="table-responsive">

            <table className="table table-striped table-bordered align-middle">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Nombre</th>

                  <th>Correo</th>

                  <th>Celular</th>

                  <th className="text-center">
                    Mostrar
                  </th>

                  <th className="text-center">
                    Editar
                  </th>

                  <th className="text-center">
                    Eliminar
                  </th>

                </tr>

              </thead>


              <tbody>

                {teachers.map((teacher) => (

                  <tr key={teacher.id}>

                    {/* ID */}

                    <td>
                      {teacher.id}
                    </td>


                    {/* NOMBRE */}

                    <td>

                      <i
                        className="bi bi-person-fill me-2"
                        style={{ color: "#25c72f" }}
                      ></i>

                      {teacher.name}

                    </td>


                    {/* CORREO */}

                    <td>
                      {teacher.email}
                    </td>


                    {/* CELULAR */}

                    <td>
                      {teacher.cell}
                    </td>


                    {/* MOSTRAR */}

                    <td className="text-center">

                      <Link
                        to={`/instructores/${teacher.id}`}
                        className="btn btn-success btn-sm"
                      >

                        <i className="bi bi-eye-fill me-1"></i>

                        Mostrar

                      </Link>

                    </td>


                    {/* EDITAR */}

                    <td className="text-center">

                      <Link
                        to={`/instructores/${teacher.id}/edit`}
                        className="btn btn-warning btn-sm"
                      >

                        <i className="bi bi-pencil-fill me-1"></i>

                        Editar

                      </Link>

                    </td>


                    {/* ELIMINAR */}

                    <td className="text-center">

                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          alert(
                            `Aquí se eliminaría el instructor: ${teacher.name}`
                          )
                        }
                      >

                        <i className="bi bi-trash-fill me-1"></i>

                        Eliminar

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TeacherIndex;