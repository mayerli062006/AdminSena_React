import React from "react";
import { Link } from "react-router-dom";

function AreaIndex() {

  // =====================================================
  // DATOS DE PRUEBA
  // Más adelante estos datos vendrán desde Laravel
  // =====================================================

  const areas = [
    {
      id: 1,
      name: "Programación",
    },
    {
      id: 2,
      name: "Diseño",
    },
    {
      id: 3,
      name: "Contabilidad",
    },
  ];


  return (

    <div className="container py-4">

      {/* =================================================
          ENCABEZADO
      ================================================== */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h1
                className="fw-bold mb-1"
                style={{ color: "#111" }}
              >

                <i
                  className="bi bi-diagram-3-fill me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                LISTA DE ÁREAS

              </h1>


              <p className="text-muted mb-2">

                Administración y consulta de áreas

              </p>


              <p className="mb-3">

                En esta sección puedes consultar y administrar
                las áreas registradas en el sistema SENA.

              </p>


              {/* NUEVA ÁREA */}

              <Link
                to="/areas/create"
                className="btn btn-sm text-white"
                style={{
                  backgroundColor: "#25c72f"
                }}
              >

                <i className="bi bi-plus-circle-fill me-1"></i>

                Nueva Área

              </Link>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          LISTADO
      ================================================== */}

      <div className="card shadow-sm border-0">

        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h3 className="fw-bold mb-1">

                <i
                  className="bi bi-diagram-3-fill me-2"
                  style={{
                    color: "#25c72f"
                  }}
                ></i>

                Áreas registradas

              </h3>


              <p className="text-muted mb-0">

                Información de las áreas del sistema

              </p>

            </div>


            {/* CONTADOR */}

            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#25c72f"
              }}
            >

              {areas.length} registros

            </span>

          </div>


          {/* =================================================
              TABLA
          ================================================== */}

          <div className="table-responsive">

            <table
              className="table table-striped table-bordered align-middle"
            >

              <thead>

                <tr>

                  <th>
                    ID
                  </th>

                  <th>
                    Nombre
                  </th>

                  <th
                    className="text-center"
                  >
                    Mostrar
                  </th>

                  <th
                    className="text-center"
                  >
                    Editar
                  </th>

                  <th
                    className="text-center"
                  >
                    Eliminar
                  </th>

                </tr>

              </thead>


              <tbody>

                {areas.map((area) => (

                  <tr key={area.id}>

                    {/* ID */}

                    <td>

                      {area.id}

                    </td>


                    {/* NOMBRE */}

                    <td>

                      <i
                        className="bi bi-folder-fill me-2"
                        style={{
                          color: "#25c72f"
                        }}
                      ></i>

                      {area.name}

                    </td>


                    {/* MOSTRAR */}

                    <td className="text-center">

                      <Link
                        to={`/areas/${area.id}`}
                        className="btn btn-success btn-sm"
                      >

                        <i className="bi bi-eye-fill me-1"></i>

                        Mostrar

                      </Link>

                    </td>


                    {/* EDITAR */}

                    <td className="text-center">

                      <Link
                        to={`/areas/${area.id}/edit`}
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
                            `Aquí se eliminaría el área: ${area.name}`
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

export default AreaIndex;