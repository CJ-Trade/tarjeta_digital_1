// Carga los JSON dinámicamente desde /src usando import.meta.glob
// Solo funciona en proyectos Vite.

const dataModules = import.meta.glob("../clientes/*/data/info.json", { eager: true });

export async function fetchClientData(cliente) {
  try {
    const path = `../clientes/${cliente}/data/info.json`;

    // Verifica si existe el cliente
    const match = Object.entries(dataModules).find(([key]) => key.includes(path));

    if (!match) {
      throw new Error(`Cliente '${cliente}' no encontrado`);
    }

    const data = match[1].default;
    console.log("✅ Datos cargados desde import.meta.glob:", data);
    return data;
  } catch (error) {
    console.error("❌ Error al cargar datos del cliente:", error);
    throw error;
  }
}
