import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  // Obtener el ID del aprendiz desde la URL
  const { id } = useParams();

  // Permite regresar a otra página
  const navigate = useNavigate();

  // Datos del aprendiz
  const [apprentice, setApprentice] = useState({
    name: "",
    email: "",
    cell_number: "",
    course_id: "",
    computer_id: "",
  });

  // Lista de cursos
  const [courses, setCourses] = useState([]);

  // Lista de computadores
  const [computers, setComputers] = useState([]);

  // Mensaje de error
  const [mensaje, setMensaje] = useState("");

  // Estado de carga
  const [cargando, setCargando] = useState(true);

  // ==========================================
  // CARGAR DATOS
  // ==========================================

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        // Obtener información del aprendiz
        const respuestaAprendiz = await fetch(
          `http://127.0.0.1:8000/api/apprentices/${id}`,
        );

        const datosAprendiz = await respuestaAprendiz.json();

        console.log("Aprendiz:", datosAprendiz);

        // Colocar los datos actuales en el formulario
        setApprentice({
          name: datosAprendiz.name_apren || "",
          email: datosAprendiz.email || "",
          cell_number: datosAprendiz.cell || "",
          course_id: datosAprendiz.course_id || "",
          computer_id: datosAprendiz.computer_id || "",
        });

        // Obtener cursos
        const respuestaCursos = await fetch(
          "http://127.0.0.1:8000/api/courses",
        );

        const datosCursos = await respuestaCursos.json();

        setCourses(datosCursos);

        // Obtener computadores
        const respuestaComputadores = await fetch(
          "http://127.0.0.1:8000/api/computers",
        );

        const datosComputadores = await respuestaComputadores.json();

        setComputers(datosComputadores);
      } catch (error) {
        console.error("Error:", error);

        setMensaje("No se pudieron cargar los datos.");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, [id]);

  // ==========================================
  // CAMBIAR DATOS DEL FORMULARIO
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setApprentice({
      ...apprentice,
      [name]: value,
    });
  };

  // ==========================================
  // ACTUALIZAR APRENDIZ
  // ==========================================

  const handleSubmit = async (e) => {
    // Evita que la página se recargue
    e.preventDefault();

    try {
      const respuesta = await fetch(
        `http://127.0.0.1:8000/api/apprentices/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            name_apren: apprentice.name,

            email: apprentice.email,

            cell: apprentice.cell_number,

            course_id: apprentice.course_id,

            computer_id: apprentice.computer_id,
          }),
        },
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el aprendiz");
      }

      alert("Aprendiz actualizado correctamente");

      // Regresar a la lista
      navigate("/apprentices");
    } catch (error) {
      console.error(error);

      setMensaje("Ocurrió un error al actualizar el aprendiz.");
    }
  };

  // ==========================================
  // MENSAJE DE CARGA
  // ==========================================

  if (cargando) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h3>Cargando información...</h3>
        </div>
      </div>
    );
  }

  // ==========================================
  // FORMULARIO
  // ==========================================

  return (
    <div className="container mt-5">
      <div className="card shadow border-0">
        {/* ENCABEZADO */}

        <div
          className="card-header text-white"
          style={{
            backgroundColor: "#25c72f",
          }}
        >
          <h2 className="mb-0">
            <i className="bi bi-person-fill-gear me-2"></i>
            Actualizar Aprendiz
          </h2>
        </div>

        {/* CUERPO */}

        <div className="card-body">
          {mensaje && <div className="alert alert-danger">{mensaje}</div>}

          <form onSubmit={handleSubmit}>
            {/* NOMBRE */}

            <div className="mb-3">
              <label className="form-label">Nombre:</label>

              <input
                type="text"
                name="name"
                className="form-control"
                value={apprentice.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}

            <div className="mb-3">
              <label className="form-label">Email:</label>

              <input
                type="email"
                name="email"
                className="form-control"
                value={apprentice.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* CELULAR */}

            <div className="mb-3">
              <label className="form-label">Número de Celular:</label>

              <input
                type="number"
                name="cell_number"
                className="form-control"
                value={apprentice.cell_number}
                onChange={handleChange}
                required
              />
            </div>

            {/* CURSO */}

            <div className="mb-3">
              <label className="form-label">Curso:</label>

              <select
                name="course_id"
                className="form-select"
                value={apprentice.course_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un curso</option>

                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name_curso}
                  </option>
                ))}
              </select>
            </div>

            {/* EQUIPO */}

            <div className="mb-4">
              <label className="form-label">Equipo:</label>

              <select
                name="computer_id"
                className="form-select"
                value={apprentice.computer_id}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un equipo</option>

                {computers.map((computer) => (
                  <option key={computer.id} value={computer.id}>
                    {computer.numero}
                  </option>
                ))}
              </select>
            </div>

            {/* BOTONES */}

            <button
              type="submit"
              className="btn text-white me-2"
              style={{
                backgroundColor: "#25c72f",
              }}
            >
              <i className="bi bi-pencil-square me-2"></i>
              Actualizar Aprendiz
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/apprentices")}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Volver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
