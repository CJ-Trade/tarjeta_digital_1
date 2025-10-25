import "./MapaGoogle.css";

export default function MapaGoogle({ data }) {
  if (!data || !data.maps_embed || !data.maps_link) return null;

  const { maps_embed, maps_link, ubicacion } = data;

  return (
    <section className="mapa">
      <h2 className="mapa-titulo">Encuéntranos en Google Maps</h2>

      <div className="mapa-contenedor">
        <iframe
          src={maps_embed}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación"
        />
      </div>

      <p className="mapa-direccion">📍 {ubicacion}</p>

      <div className="mapa-boton-container">
        <a
          href={maps_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mapa-boton"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}
