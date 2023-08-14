import { useTranslation } from "react-i18next";

const TermsConditions = () => {
  const { t } = useTranslation();

    return (
        <div className="container mx-auto bg-CardColor p-4 m-4">
            <div>
                <h1>{t("termsCondition.intro")}</h1>
                <p>{t("termsCondition.introDescription")}</p>
            </div>
        </div>
    );
};

export default TermsConditions;