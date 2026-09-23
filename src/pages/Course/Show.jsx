import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseShow() {

  const { id } = useParams();


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


  // Buscar el curso según el ID

  const course = courses.find(
    (item) => item.id === Number(id)
  );


  // =========================================
  // SI NO EXISTE
  // =========================================

  if (!course) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>
            Curso no encontrado
          </h4>

          <p>
            No existe un curso con el ID {id}.
          </p>

          <Link
            to="/cursos"
            className="btn btn-success"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver a cursos

          </Link>

        </div>

      </div>

    );

  }


  // =========================================
  // MOSTRAR CURSO
  // =========================================

  return (

    <div className="container py-4">

      <div className="card shadow-sm border-0">

        {/* ENCABEZADO */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >

          <h3 className="mb-0">

            <i className="bi bi-book-fill me-2"></i>

            Información del Curso

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
                {course.id}
              </div>

            </div>


            {/* NOMBRE */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Nombre del curso:
              </label>

              <div className="form-control bg-light">
                {course.name_curso}
              </div>

            </div>


            {/* DÍA */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Día:
              </label>

              <div className="form-control bg-light">
                {course.day}
              </div>

            </div>


            {/* ÁREA */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Área:
              </label>

              <div className="form-control bg-light">
                Área {course.area_id}
              </div>

            </div>


            {/* CENTRO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Centro de formación:
              </label>

              <div className="form-control bg-light">
                Centro {course.training_centers_id}
              </div>

            </div>

          </div>


          {/* BOTONES */}

          <Link
            to="/cursos"
            className="btn btn-secondary me-2"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver

          </Link>


          <Link
            to={`/cursos/${course.id}/edit`}
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

export default CourseShow;