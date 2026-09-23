import React, { useState } from "react";
import { Link } from "react-router-dom";

function ComputerCreate() {

  // =========================================
  // ESTADOS DEL FORMULARIO
  // =========================================

  const [numero, setNumero] = useState("");
  const [marca, setMarca] = useState("");


  // =========================================
  // GUARDAR COMPUTADOR
  // =========================================

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      `Computador creado correctamente:\n\n` +
      `Número: ${numero}\n` +
      `Marca: ${marca}`
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

            Nuevo Computador

          </h3>

        </div>


        {/* =========================================
            FORMULARIO
        ========================================== */}

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
                placeholder="Ejemplo: PC-001"
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
                placeholder="Ejemplo: HP"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
              />

            </div>


            {/* BOTÓN GUARDAR */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{ backgroundColor: "#25c72f" }}
            >

              <i className="bi bi-save-fill me-2"></i>

              Guardar Computador

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

export default ComputerCreate;