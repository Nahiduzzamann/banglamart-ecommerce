import FlashSaleBanner from "../../components/FlashSaleBanner";

const FlashSalePage = () => {
    return (
        <div className="container mx-auto">
            <div>
                <FlashSaleBanner></FlashSaleBanner>
            </div>
            <div className="mt-4">
                <h1 className="text-SubTextColor">Hunt This Special Offer</h1>
            </div>
        </div>
    );
};

export default FlashSalePage;