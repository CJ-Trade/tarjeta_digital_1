import "./EventosEmpresariales.css";
import data from "../../clientes/andrea/data/eventos_empresariales.json";

export default function EventosEmpresariales() {
  const evento = data;

  if (!evento) return <p className="cargando">Cargando información...</p>;

  return (
    <section className="eventos">
      {/* Header principal */}
      <header className="eventos-header">
        <h1>{evento.nombre_restaurante}</h1>
        <h2>{evento.servicio}</h2>
        <p className="descripcion">{evento.descripcion_general}</p>
        <p className="detalle">
          📍 {evento.ubicacion} | 🕐 {evento.horario_atencion}
        </p>
      </header>

      {/* Tipos de eventos */}
      <div className="eventos-lista">
        {evento.tipos_eventos.map((item, index) => (
          <div key={index} className="evento-card">
            <h3 className="evento-titulo">🎉 {item.tipo}</h3>
            <img src={item.imagen} alt={item.tipo} className="evento-imagen" />

            <p className="evento-descripcion">{item.descripcion}</p>
            <p className="evento-precio">
              💲 Desde {item.precio_por_persona.toFixed(2)} {evento.moneda} por persona
            </p>

            {/* Menú detallado */}
            <div className="menu-detalle">
              {Object.entries(item.menu).map(([categoria, platos]) => (
                <div key={categoria} className="menu-categoria">
                  <h4>{categoria.replaceAll("_", " ")}</h4>
                  <ul>
                    {platos.map((plato, i) => (
                      <li key={i}>• {plato}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Servicios adicionales */}
      <div className="servicios-extra">
        <h3>✨ Servicios Adicionales</h3>
        <ul>
          {evento.servicios_adicionales.map((serv, index) => (
            <li key={index}>
              <h4>{serv.nombre}</h4>
              <p>{serv.descripcion}</p>
              <span className="precio-extra">
                {serv.precio_desde
                  ? `Desde ${evento.moneda} ${serv.precio_desde.toFixed(2)}`
                  : `Desde ${evento.moneda} ${serv.precio_por_hora.toFixed(2)} / hora`}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <footer className="contacto-eventos">
        <h3>📞 Contáctanos</h3>
        <p><strong>Teléfono:</strong> {evento.contacto.telefono}</p>
        <p><strong>Correo:</strong> <a href={`mailto:${evento.contacto.correo}`}>{evento.contacto.correo}</a></p>
        <p><strong>Instagram:</strong> <a href={`https://instagram.com/${evento.contacto.instagram.replace("@", "")}`} target="_blank" rel="noreferrer">{evento.contacto.instagram}</a></p>
        <p><strong>Sitio web:</strong> <a href={evento.contacto.web} target="_blank" rel="noreferrer">{evento.contacto.web}</a></p>
      </footer>
    </section>
  );
}
