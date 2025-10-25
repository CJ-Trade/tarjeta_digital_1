import "./RedesSociales.css";

export default function RedesSociales({ data }) {
  if (!data) return null;

  const redes = [
    { nombre: "WhatsApp", link: data.whatsapp, icono: "💬" },
    { nombre: "Instagram", link: data.instagram, icono: "📸" },
    { nombre: "Facebook", link: data.facebook, icono: "👍" },
    { nombre: "Ubicación", link: data.maps, icono: "📍" },
  ];

  return (
    <section className="redes">
      <h2 className="redes-titulo">Síguenos y contáctanos</h2>

      <div className="redes-grid">
        {redes.map(
          (r, index) =>
            r.link && (
              <a
                key={index}
                href={r.link}
                className="redes-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="redes-icono">{r.icono}</span>
                <p className="redes-nombre">{r.nombre}</p>
              </a>
            )
        )}
      </div>
    </section>
  );
}
