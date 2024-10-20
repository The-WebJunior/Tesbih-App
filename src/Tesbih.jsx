import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importer le hook
import i18n from "./i18n";
export default function Tesbih() {
  const { t } = useTranslation(); // Utiliser le hook pour accéder à la fonction t
  const [subhanalah, setSubhanalah] = useState(0);
  const [alhamdulilah, setALhamdulilah] = useState(0);
  const [alahouAkbar, setAlahouAkbar] = useState(0);
  const [laIlahaIlala, setLaIlahaIlala] = useState(0);

  const Subhanalh = () => {
    setSubhanalah(subhanalah + 1);
  };

  const ALhamdulilah = () => {
    setALhamdulilah(alhamdulilah + 1);
  };
  const AlahouAkbar = () => {
    setAlahouAkbar(alahouAkbar + 1);
  };
  const LaIlahaIlala = () => {
    setLaIlahaIlala(laIlahaIlala + 1);
  };

  const initial = () => {
    setSubhanalah(0);
    setALhamdulilah(0);
    setAlahouAkbar(0);
    setLaIlahaIlala(0);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Nom de la méthode corrigé
  };

  return (
    <div
      className={`bg-gray-100 p-4 lg:w-full h-2/3 shadow-md rounded-lg sm:min-w-md  ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div
        className="flex justify-between 
       bg-gray-300 p-2 w-full rounded-lg"
      >
        <p className="text-lg font-extrabold">{t("Tesbih")}</p>
        <div className="flex items-center gap-2">
          <Languages />
          <select
            className="bg-white p-1 rounded"
            onChange={(e) => changeLanguage(e.target.value)} // Change la langue ici
          >
            <option
              value="fr"
              className={i18n.language === "ar" ? "rtl " : "ltr"}
            >
              {t("Français")}
            </option>
            <option
              value="ar"
              className={i18n.language === "ar" ? "rtl " : "ltr"}
            >
              {t("Arabe")}
            </option>
          </select>
        </div>
      </div>
      {/* <div className="shadow-md p-2 m-10 ml-80 mr-80 w-1/2 space-y-3"> */}
      <div className="flex justify-center  sm:gap-9">
        <div
          className={`shadow-md lg:p-2 p-9 py-3 m-10 lg:w-1/2 sm:w-96 space-y-3 ${
            i18n.language === "ar" ? "" : ""
          }`}
        >
          <div className="flex lg:gap-1 lg:justify-around justify-between gap-20 ">
            <p>{t("Soubhanalah")}</p> <span>{subhanalah}</span>
          </div>
          <div
            className={`flex lg:justify-around justify-between
        ${i18n.language === "ar" ? "gap-5" : ""}`}
          >
            <p>{t("Alhamdulilah")}</p> <span>{alhamdulilah}</span>
          </div>
          <div
            className={`flex gap- lg:justify-around justify-between
        ${i18n.language === "ar" ? "gap-7" : ""}`}
          >
            {" "}
            <p>{t("Alahou Akbar")}</p> <span>{alahouAkbar}</span>
          </div>
          <div className="flex gap-2 lg:justify-around justify-between">
            <p>{t("La ilaha ilala")}</p> <span>{laIlahaIlala}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 lg:flex-row items-center justify-center flex-col ">
        <button
          className="bg-green-500 p-2 rounded-full w-32"
          onClick={Subhanalh}
        >
          {t("Soubhanalah")}
        </button>
        <button
          className="bg-yellow-500 p-2 rounded-full w-32"
          onClick={ALhamdulilah}
        >
          {t("Alhamdulilah")}
        </button>
        <button
          className="bg-blue-500 p-2 rounded-full w-32"
          onClick={AlahouAkbar}
        >
          {t("Alahou Akbar")}
        </button>
        <button
          className="bg-red-500 p-2 rounded-full w-32"
          onClick={LaIlahaIlala}
        >
          {t("La ilaha ilala")}
        </button>
      </div>
      <button
        className={`bg-gray-300 p-2 rounded-lg w-1/2 mt-5${
          i18n.language === "ar" ? "" : ""
        }`}
        onClick={initial}
      >
        {t("Reinitialisation")}
      </button>
    </div>
  );
}
