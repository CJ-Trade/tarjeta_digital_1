import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchClientData } from "../utils/fetchClientData";
import Hero from "../components/Hero/Hero";
import Propuesta from "../components/Propuesta/Propuesta";
import Servicios from "../components/Servicios/Servicios";
import Galeria from "../components/Galeria/Galeria";
import RedesSociales from "../components/RedesSociales/RedesSociales";
import MapaGoogle from "../components/MapaGoogle/MapaGoogle";
import Contacto from "../components/Contacto/Contacto";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
  const { cliente } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClientData(cliente)
      .then(setData)
      .catch((err) => setError(err.message));
  }, [cliente]);

  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  if (!data) return <h2>Cargando datos...</h2>;

  return (
    <main>
        <Hero data={data.hero} />
        <Propuesta data={data.propuesta} /> {/* 👈 Aquí la nueva sección */}
        <Servicios data={data.servicios} /> {/* 👈 nueva sección */}
        <Galeria data={data.brigadas} /> {/* 👈 Nueva sección */}
        <RedesSociales data={data.redes} /> {/* 👈 nueva sección */}
        <MapaGoogle data={data.contacto} /> {/* 👈 usa el link de maps dentro de "redes" */}
        <Contacto data={data.contacto} /> {/* 👈 nueva sección final */}
        <Footer data={data.footer} /> {/* 👈 último bloque */}
    </main>
  );
}
