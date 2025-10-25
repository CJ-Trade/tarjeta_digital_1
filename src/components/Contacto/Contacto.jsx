import "./Contacto.css";

export default function Contacto({ data }) {
  if (!data) return null;

  // 🧠 Detectar si el usuario está en móvil
  const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <section className="contacto">
      <h2 className="contacto-titulo">Contáctanos</h2>

      <div className="contacto-info">
        <p>
          <strong>📞 Teléfono:</strong>{" "}
          <a
            href={`tel:${data.telefono.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.telefono}
          </a>
        </p>

        <p>
          <strong>📧 Correo:</strong>{" "}
          <a
            href={`mailto:${data.correo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.correo}
          </a>
        </p>

        <p>
          <strong>📍 Ubicación:</strong> {data.ubicacion}
        </p>

        <p>
          <strong>⏰ Horario:</strong> {data.horario}
        </p>
      </div>

      <div className="contacto-botones">
        {esMovil ? (
          <>
            {/* ✅ En móviles: llamar o WhatsApp */}
            <a
              href={`tel:${data.telefono.replace(/\s/g, "")}`}
              className="btn-contacto btn-contacto-llamar"
            >
              📞 Llamar ahora
            </a>

            <a
              href={`https://wa.me/${data.telefono.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contacto btn-contacto-whatsapp"
            >
              💬 WhatsApp
            </a>
          </>
        ) : (
          <>
            {/* 💻 En PC: abrir correo o WhatsApp web */}
            <a
              href={`mailto:${data.correo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contacto btn-contacto-correo"
            >
              ✉️ Enviar correo
            </a>

            <a
              href={`https://web.whatsapp.com/send?phone=${data.telefono.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-contacto btn-contacto-whatsapp"
            >
              💬 Abrir WhatsApp Web
            </a>
          </>
        )}
      </div>
    </section>
  );
}
