import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) // Carga las traducciones desde archivos externos
  .use(initReactI18next) // Pasamos i18next a react-i18next
  .init({
    lng: "en", // Idioma por defecto
    // fallbackLng: "en", // Idioma de respaldo si no se encuentra traducción
    backend: {
      loadPath: "/locales/{{lng}}.json", // Ruta de las traducciones
    },
    interpolation: {
      escapeValue: false, // React ya maneja el escape de HTML
    },
    // debug: true,
  });

export default i18n;
