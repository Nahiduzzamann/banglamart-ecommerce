import { useTranslation } from "react-i18next";
import LanguageToggle from "../../../components/LanguageToggle";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div>
            <LanguageToggle></LanguageToggle>
             {t("demo")}
        </div>
    );
};

export default Banner;