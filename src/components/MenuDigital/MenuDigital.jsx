import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MenuDigital.css";

export default function MenuDigital() {
  const { cliente } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../../clientes/${cliente}/data/menu_comida.json`)
      .then((module) => {
        console.log("✅ JSON cargado correctamente:", module.default);
        setData(module.default);
      })
      .catch((err) => {
        console.error("❌ Error cargando JSON:", err);
        setData(null);
      });
  }, [cliente]);

  if (!data) return <p style={{ textAlign: "center", color: "#fffaf4" }}>Cargando menú...</p>;

  return (
    <section className="menu-digital">
      {/* 🔝 Barra superior fija */}
      <header className="menu-header">
        <button className="btn-volver" onClick={() => navigate(`/${cliente}`)}>
          ⬅ Volver
        </button>
        <h1>{data.nombre_restaurante}</h1>
      </header>

      {/* 🧾 Descripción general */}
      <p className="menu-descripcion-general">{data.descripcion}</p>

      {/* 🍽️ Secciones dinámicas */}
      {Object.entries(data.menu).map(([categoria, platos]) => (
        <div key={categoria} className="menu-seccion">
          <h2>{categoria.replace("_", " ").toUpperCase()}</h2>
          <div className="menu-grid">
            {platos.map((p, i) => (
              <div key={i} className="menu-item">
                <img src={p.imagen} alt={p.nombre} />
                <div>
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <strong>
                    {data.moneda} {p.precio.toFixed(2)}
                  </strong>

                  {/* 🌿 Etiquetas */}
                  {p.etiquetas && p.etiquetas.length > 0 && (
                    <div className="etiquetas">
                      {p.etiquetas.map((tag, tIndex) => (
                        <span key={tIndex} className="etiqueta">
                          {tag.replace("_", " ")}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* ⏰ Promociones */}
                  {p.disponible && (
                    <p className="menu-disponible">🕒 {p.disponible}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
