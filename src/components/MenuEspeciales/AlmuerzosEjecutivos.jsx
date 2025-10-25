import "./AlmuerzosEjecutivos.css";
import menuData from "../../clientes/andrea/data/almuerzos_ejecutivos.json";

export default function AlmuerzosEjecutivos() {
  const menu = menuData;

  if (!menu) return <p className="cargando">Cargando menú...</p>;

  return (
    <section className="almuerzos">
      {/* Encabezado */}
      <header className="almuerzos-header">
        <h1>{menu.nombre_restaurante}</h1>
        <h2>{menu.tipo_menu}</h2>
        <p className="almuerzos-descripcion">{menu.descripcion_general}</p>
        <p className="almuerzos-horario">
          🕐 {menu.horario} —{" "}
          <strong>
            {menu.moneda} {menu.precio_base.toFixed(2)}
          </strong>
        </p>
      </header>

      {/* Menú por día */}
      <div className="almuerzos-lista">
        {menu.dias.map((dia, index) => (
          <div key={index} className="almuerzo-card">
            <h3 className="dia-titulo">🍽️ {dia.dia}</h3>

            <div className="platos">
              <div className="plato">
                <img src={dia.sopa.imagen} alt={dia.sopa.nombre} />
                <div>
                  <h4>🥣 {dia.sopa.nombre}</h4>
                  <p>{dia.sopa.descripcion}</p>
                </div>
              </div>

              <div className="plato">
                <img src={dia.plato_fuerte.imagen} alt={dia.plato_fuerte.nombre} />
                <div>
                  <h4>🍛 {dia.plato_fuerte.nombre}</h4>
                  <p>{dia.plato_fuerte.descripcion}</p>
                </div>
              </div>
            </div>

            <div className="extras">
              <p>🥤 <strong>Bebida:</strong> {dia.bebida}</p>
              <p>🍮 <strong>Postre:</strong> {dia.postre}</p>
              <p className="precio-dia">💲 {dia.precio.toFixed(2)} {menu.moneda}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Opciones adicionales */}
      <div className="opciones-adicionales">
        <h3>✨ Opciones adicionales</h3>
        <ul>
          {Object.entries(menu.opciones_adicionales).map(([clave, opcion]) => (
            <li key={clave}>
              <p>{opcion.descripcion}</p>
              <span>
                + {menu.moneda} {opcion.precio.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
