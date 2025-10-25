import "./CenasGourmet.css";
import menuData from "../../clientes/andrea/data/cenas_gourmet.json";

export default function CenasGourmet() {
  const menu = menuData;

  if (!menu) return <p className="cargando">Cargando menú...</p>;

  return (
    <section className="cenas">
      {/* Encabezado */}
      <header className="cenas-header">
        <h1>{menu.nombre_restaurante}</h1>
        <h2>{menu.tipo_menu}</h2>
        <p className="cenas-descripcion">{menu.descripcion_general}</p>
        <p className="cenas-horario">
          🌙 {menu.horario} —{" "}
          <strong>
            {menu.moneda} {menu.precio_promedio.toFixed(2)} (precio promedio)
          </strong>
        </p>
      </header>

      {/* Lista de cenas */}
      <div className="cenas-lista">
        {menu.cenas.map((cena, index) => (
          <div key={index} className="cena-card">
            <h3 className="cena-titulo">🍷 {cena.nombre}</h3>

            <div className="platos">
              <div className="plato">
                <img src={cena.entrada.imagen} alt={cena.entrada.nombre} />
                <div>
                  <h4>🥗 {cena.entrada.nombre}</h4>
                  <p>{cena.entrada.descripcion}</p>
                </div>
              </div>

              <div className="plato">
                <img src={cena.plato_fuerte.imagen} alt={cena.plato_fuerte.nombre} />
                <div>
                  <h4>🍽️ {cena.plato_fuerte.nombre}</h4>
                  <p>{cena.plato_fuerte.descripcion}</p>
                </div>
              </div>

              <div className="plato">
                <img src={cena.postre.imagen} alt={cena.postre.nombre} />
                <div>
                  <h4>🍮 {cena.postre.nombre}</h4>
                  <p>{cena.postre.descripcion}</p>
                </div>
              </div>
            </div>

            <div className="extras">
              <p>🥂 <strong>Bebida recomendada:</strong> {cena.bebida_recomendada}</p>
              <p className="precio-dia">
                💲 {cena.precio.toFixed(2)} {menu.moneda}
              </p>
              <div className="etiquetas">
                {cena.etiquetas.map((tag, i) => (
                  <span key={i} className="etiqueta">
                    {tag.replace("_", " ")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
