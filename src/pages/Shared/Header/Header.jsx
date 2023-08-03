import { useState } from "react";
import { AiOutlineClose, AiFillPhone } from "react-icons/ai";
import LanguageToggle from "../../../components/LanguageToggle";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [hide, setHide] = useState(false);
  const handleCloseAdd = () => {
    setHide(true);
  };
  return (
    <div>
      {/* Add Section  */}
      <div
        className={`relative h-[35px] flex justify-end items-center ${
          hide && "hidden"
        }`}
      >
        <button className="absolute text-2xl mr-4" onClick={handleCloseAdd}>
          <AiOutlineClose />
        </button>
        <img
          className="h-[35px] w-full object-cover"
          src="https://banglamartecommerce.com/public/uploads/all/rD8sXSsY9A88MC4VkZcnlNtSckkDnycHQcWKqGhV.png"
        ></img>
      </div>
      {/* Log In Section  */}
      <div className="bg-white border-b-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <LanguageToggle></LanguageToggle>
            </div>
            <div className="flex items-center">
                <AiFillPhone/>
              <p className="mr-4 hidden lg:block">{t('header.number')}</p>
              <p className="mr-4">{t('header.login')}</p>
              <p>{t('header.registration')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
