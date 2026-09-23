import React from "react";
import { Link, useParams } from "react-router-dom";

function TrainingCenterShow() {

  // Obtener el ID desde la URL
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

  // Buscar el centro según el ID
  const center = trainingCenters.find(
    (item) => item.id === Number(id)
  );

  // Si no existe el centro
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
            Volver a centros
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
            <i className="bi bi-building-fill me-2"></i>
            Información del Centro de Formación
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
                {center.id}
              </div>

            </div>

            {/* NOMBRE */}
            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Nombre del centro:
              </label>

              <div className="form-control bg-light">
                {center.name}
              </div>

            </div>

            {/* CIUDAD */}
            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Ciudad:
              </label>

              <div className="form-control bg-light">
                {center.city}
              </div>

            </div>

          </div>

          {/* VOLVER */}
          <Link
            to="/centros-formacion"
            className="btn btn-secondary me-2"
          >
            <i className="bi bi-arrow-left me-2"></i>
            Volver
          </Link>

          {/* EDITAR */}
          <Link
            to={`/centros-formacion/${center.id}/edit`}
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

export default TrainingCenterShow;