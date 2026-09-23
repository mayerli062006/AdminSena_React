import React from "react";
import { Link, useParams } from "react-router-dom";

function AreaShow() {

  const { id } = useParams();


  // DATOS DE PRUEBA

  const areas = [
    {
      id: 1,
      name: "Programación",
    },
    {
      id: 2,
      name: "Diseño",
    },
    {
      id: 3,
      name: "Contabilidad",
    },
  ];


  // BUSCAR ÁREA

  const area = areas.find(
    (item) => item.id === Number(id)
  );


  // SI NO EXISTE

  if (!area) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          <h4>
            Área no encontrada
          </h4>

          <p>
            No existe un área con el ID {id}.
          </p>


          <Link
            to="/areas"
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

        <div
          className="card-header text-white"
          style={{
            backgroundColor: "#25c72f"
          }}
        >

          <h3 className="mb-0">

            <i className="bi bi-folder-fill me-2"></i>

            Información del Área

          </h3>

        </div>


        <div className="card-body">

          <div className="row">

            {/* ID */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">

                ID:

              </label>

              <div className="form-control bg-light">

                {area.id}

              </div>

            </div>


            {/* NOMBRE */}

            <div className="col-md-6 mb-4">

              <label className="fw-bold">

                Nombre:

              </label>

              <div className="form-control bg-light">

                {area.name}

              </div>

            </div>

          </div>


          {/* BOTONES */}

          <Link
            to="/areas"
            className="btn btn-secondary me-2"
          >

            <i className="bi bi-arrow-left me-2"></i>

            Volver

          </Link>


          <Link
            to={`/areas/${area.id}/edit`}
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

export default AreaShow;