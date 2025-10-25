import "./Servicios.css";
import { useNavigate } from "react-router-dom";

export default function Servicios({ data }) {
  const navigate = useNavigate();

  if (!data || data.length === 0) return null;

  return (
    <section className="servicios" id="servicios">
      <h2 className="servicios-titulo">Nuestros Servicios</h2>

      <div className="servicios-grid">
        {data.map((servicio, index) => (
          <button
            key={index}
            className="servicio-boton"
            onClick={() => navigate(servicio.ruta)}
          >
            <span className="servicio-icono">{servicio.icono}</span>
            <span className="servicio-nombre">{servicio.nombre}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
