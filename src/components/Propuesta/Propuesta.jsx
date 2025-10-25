import "./Propuesta.css";

export default function Propuesta({ data }) {
  if (!data) return null;

  return (
    <section className="propuesta">
      <div className="propuesta-container">
        <h2 className="propuesta-titulo">{data.titulo}</h2>
        <p className="propuesta-texto">{data.texto}</p>
      </div>
    </section>
  );
}
