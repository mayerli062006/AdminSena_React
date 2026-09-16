import React from "react";
import { Link } from "react-router-dom";

function ApprenticeIndex() {
  // Datos temporales de aprendices
  // Más adelante estos datos vendrán de la API
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
      {/* ================================================= */}
      {/* TÍTULO */}
      {/* ================================================= */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold" style={{ color: "#16780c" }}>
            Lista de Aprendices
          </h1>

          <p className="text-muted mb-0">
            Administración de los aprendices registrados
          </p>
        </div>

        {/* BOTÓN NUEVO APRENDIZ */}

        <Link
          to="/aprendices/create"
          className="btn text-white"
          style={{ backgroundColor: "#16780c" }}
        >
          <i className="bi bi-person-plus-fill me-2"></i>
          Nuevo Aprendiz
        </Link>
      </div>

      {/* ================================================= */}
      {/* TABLA */}
      {/* ================================================= */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table
              id="idApprentice"
              className="table table-striped table-bordered align-middle"
            >
              {/* ================================================= */}
              {/* ENCABEZADOS */}
              {/* ================================================= */}

              <thead>
                <tr>
                  <th>Id</th>

                  <th>Nombre</th>

                  <th>Email</th>

                  <th>Teléfono</th>

                  <th>Curso</th>

                  <th>Equipo</th>

                  <th className="text-center">Mostrar</th>

                  <th className="text-center">Editar</th>

                  <th className="text-center">Eliminar</th>
                </tr>
              </thead>

              {/* ================================================= */}
              {/* CUERPO DE LA TABLA */}
              {/* ================================================= */}

              <tbody>
                {apprentices.map((apprentice) => (
                  <tr key={apprentice.id}>
                    {/* ID */}

                    <td>{apprentice.id}</td>

                    {/* NOMBRE */}

                    <td>
                      <i
                        className="bi bi-person-fill me-2"
                        style={{ color: "#16780c" }}
                      ></i>

                      {apprentice.name}
                    </td>

                    {/* EMAIL */}

                    <td>{apprentice.email}</td>

                    {/* TELÉFONO */}

                    <td>{apprentice.cell_number}</td>

                    {/* CURSO */}

                    <td>{apprentice.course_id}</td>

                    {/* COMPUTADOR */}

                    <td>{apprentice.computer_id}</td>

                    {/* ================================================= */}
                    {/* MOSTRAR */}
                    {/* ================================================= */}

                    <td className="text-center">
                      <Link
                        to={`/aprendices/${apprentice.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        <i className="bi bi-eye-fill me-1"></i>
                        Mostrar
                      </Link>
                    </td>

                    {/* ================================================= */}
                    {/* EDITAR */}
                    {/* ================================================= */}

                    <td className="text-center">
                      <Link
                        to={`/aprendices/${apprentice.id}/edit`}
                        className="btn btn-warning btn-sm"
                      >
                        <i className="bi bi-pencil-fill me-1"></i>
                        Editar
                      </Link>
                    </td>

                    {/* ================================================= */}
                    {/* ELIMINAR */}
                    {/* ================================================= */}

                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          alert(
                            `Aquí se eliminaría el aprendiz: ${apprentice.name}`,
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

export default ApprenticeIndex;
