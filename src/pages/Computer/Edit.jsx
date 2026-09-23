import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function ComputerEdit() {

  const { id } = useParams();


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


  // Buscar computador

  const computer = computers.find(
    (item) => item.id === Number(id)
  );


  // =========================================
  // ESTADOS
  // =========================================

  const [numero, setNumero] = useState(
    computer ? computer.numero : ""
  );

  const [marca, setMarca] = useState(
    computer ? computer.marca : ""
  );


  // =========================================
  // ACTUALIZAR
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Computador actualizado correctamente:\n\n` +
      `Número: ${numero}\n` +
      `Marca: ${marca}`
    );

  };


  // =========================================
  // SI NO EXISTE
  // =========================================

  if (!computer) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>
            Computador no encontrado
          </h4>

          <p>
            No existe un computador con el ID {id}.
          </p>

          <Link
            to="/computadores"
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

            Actualizar Computador

          </h3>

        </div>


        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NÚMERO */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Número del computador:
              </label>

              <input
                type="text"
                className="form-control"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />

            </div>


            {/* MARCA */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Marca:
              </label>

              <input
                type="text"
                className="form-control"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
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

              Actualizar Computador

            </button>


            {/* VOLVER */}

            <Link
              to="/computadores"
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

export default ComputerEdit;