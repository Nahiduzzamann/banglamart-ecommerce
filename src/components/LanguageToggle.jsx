import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const [language, setLanguage] = useState(true);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(!language);
  };

  return (
    <>
      {language ? (
        <button
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-500 hover:to-gray-800 hover:from-gray-500 text-white py-2 px-2 rounded text-xs lg:text-xl"
          onClick={() => handleLanguageChange("bn")}
        >
          বাংলাই দেখুন
        </button>
      ) : (
        <button
          className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-500 hover:to-gray-800 hover:from-gray-500 text-white py-2 px-2 rounded text-xs lg:text-xl"
          onClick={() => handleLanguageChange("en")}
        >
          Translate to English
        </button>
      )}
    </>
  );
};

export default LanguageToggle;
