import React, { useState } from 'react';

export default function Create({ courses = [], computers = [], onSave, onNavigate }) {
  // Estado para capturar los datos del formulario (mismos names que en Blade)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cell_number: '',
    course_id: '',
    computer_id: ''
  });

  // Manejador genérico para actualizar el estado de cada input/select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejador del submit (envío)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onSave) {
      onSave(formData);
    } else {
      console.log('Datos a enviar:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Formulario Aprendices</h1>

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

        {/* Campo Número de teléfono */}
        <div className="mb-3">
          <label className="form-label">Número de teléfono:</label>
          <input
            type="text"
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

        {/* Botón Enviar */}
        <button type="submit" className="btn btn-success me-2">
          Enviar Formulario
        </button>

        {/* Botón Volver */}
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onNavigate && onNavigate('index')}
        >
          Volver
        </button>

      </form>
    </div>
  );
}