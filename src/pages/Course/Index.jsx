import React from "react";
import { Link } from "react-router-dom";

function CourseIndex() {

  // =========================================
  // DATOS DE PRUEBA
  // =========================================

  const courses = [
    {
      id: 1,
      name_curso: "Análisis y Desarrollo de Software",
      day: "Lunes",
      area_id: 1,
      training_centers_id: 1,
    },
    {
      id: 2,
      name_curso: "Diseño Gráfico",
      day: "Martes",
      area_id: 2,
      training_centers_id: 1,
    },
    {
      id: 3,
      name_curso: "Contabilidad",
      day: "Miércoles",
      area_id: 3,
      training_centers_id: 2,
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
              className="bi bi-book-fill me-2"
              style={{ color: "#25c72f" }}
            ></i>

            LISTA DE CURSOS

          </h1>

          <p className="text-muted mb-2">
            Administración y consulta de cursos
          </p>

          <p className="mb-3">
            En esta sección puedes consultar y administrar los
            cursos registrados en el sistema SENA.
          </p>

          {/* BOTÓN NUEVO CURSO */}

          <Link
            to="/cursos/create"
            className="btn btn-sm text-white"
            style={{ backgroundColor: "#25c72f" }}
          >

            <i className="bi bi-plus-circle-fill me-1"></i>

            Nuevo Curso

          </Link>

        </div>

      </div>


      {/* =========================================
          TABLA DE CURSOS
      ========================================== */}

      <div className="card shadow-sm border-0">

        <div className="card-body">

          {/* ENCABEZADO DE LA TABLA */}

          <div className="d-flex justify-content-between align-items-center mb-3">

            <div>

              <h3 className="fw-bold mb-1">

                <i
                  className="bi bi-book-fill me-2"
                  style={{ color: "#25c72f" }}
                ></i>

                Cursos registrados

              </h3>

              <p className="text-muted mb-0">
                Información de los cursos del sistema
              </p>

            </div>

            <span
              className="badge rounded-pill"
              style={{ backgroundColor: "#25c72f" }}
            >

              {courses.length} registros

            </span>

          </div>


          {/* TABLA */}

          <div className="table-responsive">

            <table className="table table-striped table-bordered align-middle">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Nombre del curso</th>

                  <th>Día</th>

                  <th>Área</th>

                  <th>Centro de formación</th>

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

                {courses.map((course) => (

                  <tr key={course.id}>

                    {/* ID */}

                    <td>
                      {course.id}
                    </td>


                    {/* NOMBRE */}

                    <td>

                      <i
                        className="bi bi-book me-2"
                        style={{ color: "#25c72f" }}
                      ></i>

                      {course.name_curso}

                    </td>


                    {/* DÍA */}

                    <td>
                      {course.day}
                    </td>


                    {/* ÁREA */}

                    <td>
                      Área {course.area_id}
                    </td>


                    {/* CENTRO */}

                    <td>
                      Centro {course.training_centers_id}
                    </td>


                    {/* MOSTRAR */}

                    <td className="text-center">

                      <Link
                        to={`/cursos/${course.id}`}
                        className="btn btn-success btn-sm"
                      >

                        <i className="bi bi-eye-fill me-1"></i>

                        Mostrar

                      </Link>

                    </td>


                    {/* EDITAR */}

                    <td className="text-center">

                      <Link
                        to={`/cursos/${course.id}/edit`}
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
                            `Aquí se eliminaría el curso: ${course.name_curso}`
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

export default CourseIndex;