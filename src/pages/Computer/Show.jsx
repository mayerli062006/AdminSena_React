import React from "react";
import { Link, useParams } from "react-router-dom";

function ComputerShow() {

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

            Volver a computadores

          </Link>

        </div>

      </div>

    );

  }


  // =========================================
  // INFORMACIÓN DEL COMPUTADOR
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

            <i className="bi bi-pc-display-horizontal me-2"></i>

            Información del Computador

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
                {computer.id}
              </div>

            </div>


            {/* NÚMERO */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Número:
              </label>

              <div className="form-control bg-light">
                {computer.numero}
              </div>

            </div>


            {/* MARCA */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">
                Marca:
              </label>

              <div className="form-control bg-light">
                {computer.marca}
              </div>

            </div>

          </div>


          {/* BOTÓN VOLVER */}

          <Link
            to="/computadores"
            className="btn btn-secondary me-2"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver

          </Link>


          {/* BOTÓN EDITAR */}

          <Link
            to={`/computadores/${computer.id}/edit`}
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

export default ComputerShow;