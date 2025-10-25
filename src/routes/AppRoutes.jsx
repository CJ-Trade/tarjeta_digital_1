import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MenuDigital from "../components/MenuDigital/MenuDigital";
import AlmuerzosEjecutivos from "../components/MenuEspeciales/AlmuerzosEjecutivos";
import CenasGourmet from "../components/CenasGourmet/CenasGourmet";
import EventosEmpresariales from "../components/EventosEmpresariales/EventosEmpresariales";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔹 Ruta principal de cada cliente */}
        <Route path="/:cliente" element={<LandingPage />} />
        {/* 🔹 Nueva ruta para el menú digital del cliente */}
        <Route path="/:cliente/menu" element={<MenuDigital />} />
        <Route path="/:cliente/almuerzos" element={<AlmuerzosEjecutivos />} />
        <Route path="/:cliente/cenas" element={<CenasGourmet />} />
        <Route path="/:cliente/eventos" element={<EventosEmpresariales />} />
      </Routes>
    </BrowserRouter>
  );
}
