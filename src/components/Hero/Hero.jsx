import "./Hero.css";

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${data.imagenFondo})`,
      }}
    >
      {/* Capa de desenfoque */}
      <div
        className="hero-blur-bg"
        style={{
          backgroundImage: `url(${data.imagenFondo})`,
        }}
      ></div>

      <div className="hero-content">
        <div className="hero-info">
          <h1 className="hero-nombre">{data.nombre}</h1>
          <h2 className="hero-cargo">{data.cargo}</h2>
          <h3 className="hero-empresa">{data.empresa}</h3>
          <p className="hero-descripcion">{data.descripcion}</p>
          <p className="hero-frase">“{data.frase}”</p>
        </div>

        <div className="hero-foto">
          <img src={data.foto} alt={`Foto de ${data.nombre}`} />
        </div>
      </div>
    </section>
  );
}
