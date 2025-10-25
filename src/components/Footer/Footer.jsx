import "./Footer.css";

export default function Footer({ data }) {
  if (!data || !data.texto) return null;

  return (
    <footer className="footer">
      <p className="footer-texto">{data.texto}</p>
    </footer>
  );
}
