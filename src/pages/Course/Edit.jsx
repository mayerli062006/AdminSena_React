import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CourseEdit() {

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


  // Buscar curso

  const course = courses.find(
    (item) => item.id === Number(id)
  );


  // =========================================
  // ESTADOS
  // =========================================

  const [nameCurso, setNameCurso] = useState(
    course ? course.name_curso : ""
  );

  const [day, setDay] = useState(
    course ? course.day : ""
  );

  const [areaId, setAreaId] = useState(
    course ? course.area_id : ""
  );

  const [trainingCenterId, setTrainingCenterId] = useState(
    course ? course.training_centers_id : ""
  );


  // =========================================
  // ACTUALIZAR
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Curso actualizado correctamente:\n\n` +
      `Nombre: ${nameCurso}\n` +
      `Día: ${day}\n` +
      `Área: ${areaId}\n` +
      `Centro: ${trainingCenterId}`
    );

  };


  // =========================================
  // CURSO NO ENCONTRADO
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

            Volver

          </Link>

        </div>

      </div>

    );

  }


  // =========================================
  // FORMULARIO
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

            <i className="bi bi-pencil-fill me-2"></i>

            Actualizar Curso

          </h3>

        </div>


        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NOMBRE */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Nombre del curso:
              </label>

              <input
                type="text"
                className="form-control"
                value={nameCurso}
                onChange={(e) =>
                  setNameCurso(e.target.value)
                }
                required
              />

            </div>


            {/* DÍA */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Día:
              </label>

              <select
                className="form-select"
                value={day}
                onChange={(e) =>
                  setDay(e.target.value)
                }
                required
              >

                <option value="">
                  Seleccione un día
                </option>

                <option value="Lunes">
                  Lunes
                </option>

                <option value="Martes">
                  Martes
                </option>

                <option value="Miércoles">
                  Miércoles
                </option>

                <option value="Jueves">
                  Jueves
                </option>

                <option value="Viernes">
                  Viernes
                </option>

              </select>

            </div>


            {/* ÁREA */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Área:
              </label>

              <select
                className="form-select"
                value={areaId}
                onChange={(e) =>
                  setAreaId(e.target.value)
                }
                required
              >

                <option value="">
                  Seleccione un área
                </option>

                <option value="1">
                  Programación
                </option>

                <option value="2">
                  Diseño
                </option>

                <option value="3">
                  Contabilidad
                </option>

              </select>

            </div>


            {/* CENTRO */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Centro de formación:
              </label>

              <select
                className="form-select"
                value={trainingCenterId}
                onChange={(e) =>
                  setTrainingCenterId(e.target.value)
                }
                required
              >

                <option value="">
                  Seleccione un centro
                </option>

                <option value="1">
                  Centro de Comercio y Servicios
                </option>

                <option value="2">
                  Centro Agropecuario
                </option>

              </select>

            </div>


            {/* BOTONES */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{ backgroundColor: "#25c72f" }}
            >

              <i className="bi bi-pencil-square me-2"></i>

              Actualizar Curso

            </button>


            <Link
              to="/cursos"
              className="btn btn-secondary"
            >

              <i className="bi bi-arrow-left me-2"></i>

              Volver

            </Link>

          </form>

        </div>

      </div>

    </div>

  );
}

export default CourseEdit;