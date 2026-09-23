import React, { useState, useEffect } from 'react';

export default function Edit({ apprentice, courses = [], computers = [], onUpdate, onNavigate }) {
  // Inicializamos el estado con los valores que provienen de la BD o un objeto vacío
  const [formData, setFormData] = useState({
    name: apprentice?.name_apren || '',
    email: apprentice?.email || '',
    cell_number: apprentice?.cell || '',
    course_id: apprentice?.course_id || '',
    computer_id: apprentice?.computer_id || ''
  });

  // Efecto para actualizar el formulario si cambia la prop apprentice
  useEffect(() => {
    if (apprentice) {
      setFormData({
        name: apprentice.name_apren || '',
        email: apprentice.email || '',
        cell_number: apprentice.cell || '',
        course_id: apprentice.course_id || '',
        computer_id: apprentice.computer_id || ''
      });
    }
  }, [apprentice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onUpdate) {
      onUpdate(apprentice?.id, formData);
    } else {
      console.log('Datos actualizados a enviar:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Actualizar Aprendiz</h1>
      <br />

      <form onSubmit={handleSubmit}>
        
        {/* Campo Nombre */}
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Email */}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Número de Celular */}
        <div className="mb-3">
          <label className="form-label">Número de Celular:</label>
          <input
            type="number"
            name="cell_number"
            className="form-control"
            value={formData.cell_number}
            onChange={handleChange}
            required
          />
        </div>

        {/* Select Curso */}
        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <select
            name="course_id"
            className="form-control"
            value={formData.course_id}
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

        {/* Select Equipo */}
        <div className="mb-3">
          <label className="form-label">Equipo:</label>
          <select
            name="computer_id"
            className="form-control"
            value={formData.computer_id}
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

        {/* Botón Actualizar */}
        <button type="submit" className="btn btn-primary me-2">
          Actualizar Aprendiz
        </button>

        {/* Botón Volver */}
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onNavigate && onNavigate('index')}
        >
          <i className="bi bi-arrow-left me-1"></i> Volver
        </button>

      </form>
    </div>
  );
}