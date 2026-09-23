import React from "react";
import { Link } from "react-router-dom";

function ComputerIndex() {

  // =========================================
  // DATOS DE PRUEBA
  // =========================================

  const computers = [
    {
      id: 1,
      numero: "PC-001",
      marca: "HP",
    },
    {
      id: 2,
      numero: "PC-002",
      marca: "Lenovo",
    },
    {
      id: 3,
      numero: "PC-003",
      marca: "Dell",
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
              className="bi bi-pc-display-horizontal me-2"
              style={{ color: "#25c72f" }}
            ></i>

            LISTA DE COMPUTADORES

          </h1>

          <p className="text-muted mb-2">
            Administración y consulta de computadores
          </p>

          <p className="mb-3">
            En esta sección puedes consultar y administrar los
            computadores registrados en el sistema SENA.
          </p>

          {/* NUEVO COMPUTADOR */}

          <Link
            to="/computadores/create"
            className="btn btn-sm text-white"
            style={{ backgroundColor: "#25c72f" }}
          >

            <i className="bi bi-plus-circle-fill me-1"></i>

            Nuevo Computador

          </Link>

        </div>

      </div>


      {/* =========================================
          TABLA
      ========================================== */}

      <div className="card shadow-sm border-0">

        <div className="card-body">

          {/* ENCABEZADO */}

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h3 className="fw-bold mb-1">

                <i
                  className="bi bi-pc-display-horizontal me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                Computadores registrados

              </h3>

              <p className="text-muted mb-0">
                Información de los computadores del sistema
              </p>

            </div>

            <span
              className="badge rounded-pill"
              style={{ backgroundColor: "#25c72f" }}
            >
              {computers.length} registros
            </span>

          </div>


          {/* TABLA */}

          <div className="table-responsive">

            <table className="table table-striped table-bordered align-middle">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Número</th>

                  <th>Marca</th>

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

                {computers.map((computer) => (

                  <tr key={computer.id}>

                    {/* ID */}

                    <td>
                      {computer.id}
                    </td>


                    {/* NÚMERO */}

                    <td>

                      <i
                        className="bi bi-pc-display me-2"
                        style={{ color: "#25c72f" }}
                      ></i>

                      {computer.numero}

                    </td>


                    {/* MARCA */}

                    <td>
                      {computer.marca}
                    </td>


                    {/* MOSTRAR */}

                    <td className="text-center">

                      <Link
                        to={`/computadores/${computer.id}`}
                        className="btn btn-success btn-sm"
                      >

                        <i className="bi bi-eye-fill me-1"></i>

                        Mostrar

                      </Link>

                    </td>


                    {/* EDITAR */}

                    <td className="text-center">

                      <Link
                        to={`/computadores/${computer.id}/edit`}
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
                            `Aquí se eliminaría el computador: ${computer.numero}`
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

export default ComputerIndex;