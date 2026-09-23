import React, { useState } from "react";
import { Link } from "react-router-dom";

function TrainingCenterCreate() {

  // Estados para guardar los datos del formulario
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Centro de formación creado correctamente:\n\n` +
      `Nombre: ${name}\n` +
      `Ciudad: ${city}`
    );
  };

  return (
    <div className="container py-4">

      <div className="card shadow-sm border-0">

        {/* ENCABEZADO */}
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >
          <h3 className="mb-0">
            <i className="bi bi-building-add me-2"></i>
            Nuevo Centro de Formación
          </h3>
        </div>

        {/* FORMULARIO */}
        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NOMBRE */}
            <div className="mb-4">

              <label className="form-label fw-bold">
                Nombre del centro:
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Ejemplo: Centro de Comercio y Servicios"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>

            {/* CIUDAD */}
            <div className="mb-4">

              <label className="form-label fw-bold">
                Ciudad:
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Ejemplo: Popayán"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />

            </div>

            {/* GUARDAR */}
            <button
              type="submit"
              className="btn text-white me-2"
              style={{ backgroundColor: "#25c72f" }}
            >
              <i className="bi bi-save-fill me-2"></i>
              Guardar Centro
            </button>

            {/* VOLVER */}
            <Link
              to="/centros-formacion"
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

export default TrainingCenterCreate;