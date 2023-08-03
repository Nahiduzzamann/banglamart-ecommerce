import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineRight } from "react-icons/ai";
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
          className=" hover:to-gray-800 hover:from-gray-500 text-white py-2 px-2 rounded text-xs lg:text-xl"
          onClick={() => handleLanguageChange("bn")}
        >
          <div className="flex items-center">
          <p className="text-black text-sm">English</p>
            <AiOutlineRight color="black" className="text-sm"/>
            <p className="text-black text-sm">বাংলা</p>
          </div>
        </button>
      ) : (
        <button
          className=" hover:to-gray-800 hover:from-gray-500 text-white py-2 px-2 rounded text-xs lg:text-xl"
          onClick={() => handleLanguageChange("en")}
        >
          <div className="flex items-center">
          <p className="text-black text-sm">বাংলা</p>
            <AiOutlineRight color="black" className="text-sm"/>
            <p className="text-black text-sm">English</p>
          </div>
        </button>
      )}
    </>
  );
};

export default LanguageToggle;
