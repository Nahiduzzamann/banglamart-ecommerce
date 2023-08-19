import { useTranslation } from "react-i18next";

const SupportPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto bg-CardColor p-4 m-4">
            <div>
                <h1 className="mt-4 mb-1 mr-4 text-TextColor">{t("SupportPolicy.CashOn")}</h1>
                <p className="mb-2 mr-2 text-SubTextColor">{t("sellerPolicy.sellerPolicyDescription")}</p> <br />
                
            </div>
        </div>
    );  
    
};

export default SupportPolicy;