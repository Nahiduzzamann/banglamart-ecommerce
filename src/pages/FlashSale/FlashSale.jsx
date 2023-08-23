import EmptyContent from "../../components/EmptyContent";
import FlashSaleBanner from "../../components/FlashSaleBanner";

const FlashSalePage = () => {
  const products = false;
  return (
    <div className="container mx-auto">
      <div>
        <FlashSaleBanner></FlashSaleBanner>
      </div>
      <div className="m-1 lg:m-0">
        <div className="mt-4">
          <h1 className="text-SubTextColor mb-4">Hunt This Special Offer</h1>
        </div>
        <div>
          <div>
            {products ? (
              <div></div>
            ) : (
              <EmptyContent text='Currently No Offer available!!!'></EmptyContent>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
