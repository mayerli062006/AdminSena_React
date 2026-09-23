import React from "react";
import { Link } from "react-router-dom";

function ApprenticeIndex() {

  // DATOS DE PRUEBA
  const apprentices = [
    {
      id: 1,
      name: "Mayerli Maca",
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

  return (
    <div className="container py-4">

      {/* ENCABEZADO */}
      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h1
                className="fw-bold mb-1"
                style={{ color: "#111" }}
              >
                <i
                  className="bi bi-people-fill me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                LISTA DE APRENDICES
              </h1>

              <p className="text-muted mb-3">
                Administración y consulta de aprendices
              </p>

              <p>
                En esta sección puedes consultar la información
                de los aprendices registrados en el sistema SENA.
              </p>

              <Link
                to="/aprendices/create"
                className="btn btn-sm text-white"
                style={{
                  backgroundColor: "#25c72f"
                }}
              >
                <i className="bi bi-plus-circle-fill me-1"></i>
                Nuevo Aprendiz
              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* LISTADO */}

      <div className="card shadow-sm border-0">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h3 className="fw-bold mb-1">

                <i
                  className="bi bi-person-lines-fill me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                Aprendices registrados

              </h3>

              <p className="text-muted mb-0">
                Información de los aprendices del sistema
              </p>

            </div>


            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#25c72f"
              }}
            >
              {apprentices.length} registros
            </span>

          </div>


          {/* TABLA */}

          <div className="table-responsive">

            <table className="table table-striped table-bordered align-middle">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Nombre</th>

                  <th>Email</th>

                  <th>Teléfono</th>

                  <th>Curso</th>

                  <th>Equipo</th>

                  <th className="text-center">
                    Acción
                  </th>

                </tr>

              </thead>


              <tbody>

                {apprentices.map((apprentice) => (

                  <tr key={apprentice.id}>

                    {/* ID */}

                    <td>
                      {apprentice.id}
                    </td>


                    {/* NOMBRE */}

                    <td>

                      <i
                        className="bi bi-person-fill me-2"
                        style={{
                          color: "#25c72f"
                        }}
                      ></i>

                      {apprentice.name}

                    </td>


                    {/* EMAIL */}

                    <td>
                      {apprentice.email}
                    </td>


                    {/* TELÉFONO */}

                    <td>
                      {apprentice.cell_number}
                    </td>


                    {/* CURSO */}

                    <td>
                      {apprentice.course_id}
                    </td>


                    {/* EQUIPO */}

                    <td>
                      {apprentice.computer_id}
                    </td>


                    {/* ACCIONES */}

                    <td className="text-center">

                      <div className="d-flex justify-content-center gap-1">

                        {/* MOSTRAR */}

                        <Link
                          to={`/aprendices/${apprentice.id}`}
                          className="btn btn-success btn-sm"
                        >

                          <i className="bi bi-eye-fill me-1"></i>

                          Mostrar

                        </Link>


                        {/* EDITAR */}

                        <Link
                          to={`/aprendices/${apprentice.id}/edit`}
                          className="btn btn-warning btn-sm"
                        >

                          <i className="bi bi-pencil-fill me-1"></i>

                          Editar

                        </Link>


                        {/* ELIMINAR */}

                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => {

                            alert(
                              `Aquí se eliminaría: ${apprentice.name}`
                            );

                          }}
                        >

                          <i className="bi bi-trash-fill me-1"></i>

                          Eliminar

                        </button>

                      </div>

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

export default ApprenticeIndex;