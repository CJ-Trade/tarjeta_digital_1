import "./Galeria.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom"; // ✅ Importa Link y useParams

export default function GaleriaBrigadas({ data }) {
  const { cliente } = useParams(); // ✅ detecta el cliente dinámicamente
  if (!data || !data.imagenes || data.imagenes.length === 0) return null;

  const [indice, setIndice] = useState(0);
  const visible = 3;
  const total = data.imagenes.length;

  const siguiente = () => {
    if (indice < total - visible) setIndice(indice + 1);
  };

  const anterior = () => {
    if (indice > 0) setIndice(indice - 1);
  };

  return (
    <section className="galeria">
      <h2 className="galeria-titulo">Productos de la casa</h2>

      <div className="galeria-contenedor">
        {total > visible && (
          <button className="carrusel-btn izquierda" onClick={anterior}>
            ❮
          </button>
        )}

        <div className="galeria-fila">
          {data.imagenes
            .slice(indice, indice + visible)
            .map((imagen, index) => (
              <div key={index} className="galeria-item">
                <img
                  src={imagen}
                  alt={`Producto ${index + 1}`}
                  className="galeria-img"
                />
              </div>
            ))}
        </div>

        {total > visible && (
          <button className="carrusel-btn derecha" onClick={siguiente}>
            ❯
          </button>
        )}
      </div>

      {/* ✅ Ahora usamos Link en lugar de <a> */}
      {data.boton && (
        <div className="galeria-boton-container">
          <Link
            to={`/${cliente}/menu`} // 🔹 Ruta interna dinámica
            className="galeria-boton"
          >
            {data.boton.texto}
          </Link>
        </div>
      )}
    </section>
  );
}

