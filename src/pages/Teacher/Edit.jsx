import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function TeacherEdit() {

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
  // ESTADOS
  // =========================================

  const [name, setName] = useState(
    teacher ? teacher.name : ""
  );

  const [email, setEmail] = useState(
    teacher ? teacher.email : ""
  );

  const [cell, setCell] = useState(
    teacher ? teacher.cell : ""
  );


  // =========================================
  // ACTUALIZAR
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Instructor actualizado correctamente:\n\n` +
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `Celular: ${cell}`
    );

  };


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

            Volver

          </Link>

        </div>

      </div>

    );

  }


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

            <i className="bi bi-pencil-fill me-2"></i>

            Actualizar Instructor

          </h3>

        </div>


        {/* FORMULARIO */}

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NOMBRE */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Nombre completo:
              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>


            {/* CORREO */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Correo electrónico:
              </label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>


            {/* CELULAR */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Celular:
              </label>

              <input
                type="tel"
                className="form-control"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
                required
              />

            </div>


            {/* ACTUALIZAR */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{ backgroundColor: "#25c72f" }}
            >

              <i className="bi bi-pencil-square me-2"></i>

              Actualizar Instructor

            </button>


            {/* VOLVER */}

            <Link
              to="/instructores"
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

export default TeacherEdit;