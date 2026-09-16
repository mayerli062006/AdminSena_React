import React from "react";

function Footer() {
  return (
    <footer
      className="text-white mt-5"
      style={{
        backgroundColor: "#212529",
      }}
    >
      <div className="container py-4">
        <div className="row">
          {/* CONTACTO */}

          <div className="col-md-6">
            <h5 className="fw-bold">Contacto</h5>

            <p className="mb-1">Teléfono: +57 3147959620</p>

            <p className="mb-0">Correo: admin34@example.com</p>
          </div>

          {/* REDES */}

          <div className="col-md-6">
            <h5 className="fw-bold">Síguenos</h5>

            <div className="d-flex gap-3">
              <i
                className="bi bi-facebook"
                style={{
                  fontSize: "20px",
                  color: "#0d6efd",
                }}
              ></i>

              <i
                className="bi bi-twitter"
                style={{
                  fontSize: "20px",
                  color: "#0d6efd",
                }}
              ></i>

              <i
                className="bi bi-instagram"
                style={{
                  fontSize: "20px",
                  color: "#0d6efd",
                }}
              ></i>
            </div>
          </div>
        </div>

        <hr />

        <div className="text-center">© 2026 Sistema de Administración SENA</div>
      </div>
    </footer>
  );
}

export default Footer;
