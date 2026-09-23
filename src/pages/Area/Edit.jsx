import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function AreaEdit() {

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


  // ESTADO DEL NOMBRE

  const [name, setName] = useState(
    area ? area.name : ""
  );


  // ACTUALIZAR

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(`Área actualizada: ${name}`);

  };


  // SI NO EXISTE

  if (!area) {

    return (

      <div className="container py-5">

        <div className="alert alert-danger">

          Área no encontrada.

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

            <i className="bi bi-pencil-fill me-2"></i>

            Actualizar Área

          </h3>

        </div>


        <div className="card-body">

          <form onSubmit={handleSubmit}>

            {/* NOMBRE */}

            <div className="mb-4">

              <label className="form-label fw-bold">

                Nombre del área:

              </label>

              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

            </div>


            {/* ACTUALIZAR */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{
                backgroundColor: "#25c72f"
              }}
            >

              <i className="bi bi-pencil-square me-2"></i>

              Actualizar Área

            </button>


            {/* VOLVER */}

            <Link
              to="/areas"
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

export default AreaEdit;