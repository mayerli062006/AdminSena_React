import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function TrainingCenterEdit() {

  // Obtener el ID de la URL
  const { id } = useParams();

  // Datos de prueba
  const trainingCenters = [
    {
      id: 1,
      name: "Centro de Comercio y Servicios",
      city: "Popayán",
    },
    {
      id: 2,
      name: "Centro Agropecuario",
      city: "Popayán",
    },
    {
      id: 3,
      name: "Centro Industrial",
      city: "Cali",
    },
  ];

  // Buscar el centro
  const center = trainingCenters.find(
    (item) => item.id === Number(id)
  );

  // Estados del formulario
  const [name, setName] = useState(
    center ? center.name : ""
  );

  const [city, setCity] = useState(
    center ? center.city : ""
  );

  // Actualizar
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Centro actualizado correctamente:\n\n` +
      `Nombre: ${name}\n` +
      `Ciudad: ${city}`
    );
  };

  // Si no existe
  if (!center) {
    return (
      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>Centro de formación no encontrado</h4>

          <p>
            No existe un centro de formación con el ID {id}.
          </p>

          <Link
            to="/centros-formacion"
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

        {/* ENCABEZADO */}
        <div
          className="card-header text-white"
          style={{ backgroundColor: "#25c72f" }}
        >
          <h3 className="mb-0">
            <i className="bi bi-pencil-fill me-2"></i>
            Actualizar Centro de Formación
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
              Actualizar Centro
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

export default TrainingCenterEdit;