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
          className="p-1 "
          onClick={() => handleLanguageChange("bn")}
        >
          <div className="flex items-center">
          <p className=" text-SubTextColor">English</p>
            <AiOutlineRight className="text-[12px] text-SubTextColor hover:text-TextColor"/>
            <p className="text-SubTextColor ">বাংলা</p>
          </div>
        </button>
      ) : (
        <button
          className="p-1"
          onClick={() => handleLanguageChange("en")}
        >
          <div className="flex items-center">
          <p className="text-SubTextColor">বাংলা</p>
            <AiOutlineRight color="" className="text-[12px] text-SubTextColor hover:text-TextColor"/>
            <p className="text-SubTextColor">English</p>
          </div>
        </button>
      )}
    </>
  );
};

export default LanguageToggle;
