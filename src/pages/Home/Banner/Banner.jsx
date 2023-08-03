import { useTranslation } from "react-i18next";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div>
             {t("demo")}
        </div>
    );
};

export default Banner;