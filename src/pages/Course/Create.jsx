import React, { useState } from "react";
import { Link } from "react-router-dom";

function CourseCreate() {

  // =========================================
  // ESTADOS DEL FORMULARIO
  // =========================================

  const [nameCurso, setNameCurso] = useState("");
  const [day, setDay] = useState("");
  const [areaId, setAreaId] = useState("");
  const [trainingCenterId, setTrainingCenterId] = useState("");


  // =========================================
  // GUARDAR CURSO
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Curso creado correctamente:\n\n` +
      `Nombre: ${nameCurso}\n` +
      `Día: ${day}\n` +
      `Área: ${areaId}\n` +
      `Centro: ${trainingCenterId}`
    );

  };


  return (

    <div className="container py-4">

      <div className="card shadow-sm border-0">

        {/* =========================================
            ENCABEZADO
        ========================================== */}

        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >

          <h3 className="mb-0">

            <i className="bi bi-plus-circle-fill me-2"></i>

            Nuevo Curso

          </h3>

        </div>


        {/* =========================================
            FORMULARIO
        ========================================== */}

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
                placeholder="Ingrese el nombre del curso"
                value={nameCurso}
                onChange={(e) => setNameCurso(e.target.value)}
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
                onChange={(e) => setDay(e.target.value)}
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
                onChange={(e) => setAreaId(e.target.value)}
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


            {/* CENTRO DE FORMACIÓN */}

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

              <i className="bi bi-save-fill me-2"></i>

              Guardar Curso

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

export default CourseCreate;