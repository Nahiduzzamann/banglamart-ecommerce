import { useEffect } from "react";
import EmptyContent from "../../components/EmptyContent";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlashSellData } from "../../services/actions/flashSellDataAction";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductCart from "../../components/ProductCart";

const FlashSalePage = () => {
  const flashSell = useSelector((state) => state.flashSell.flashSell.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlashSellData(flashSell[0].id));
  }, []);
  const flashSellData = useSelector(
    (state) => state.flashSellData.flashSellData.data
  );

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
          <div className="grid grid-cols-5 gap-4">
            {flashSellData ? (
              flashSellData.length > 0 ? (
                flashSellData.map((data,i) => (<ProductCart product={data} key={i}></ProductCart>))
              ) : (
                <EmptyContent text="Currently No Offer available!!!"></EmptyContent>
              )
            ) : (
              <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
                <h3>
                  <Skeleton count={8} />
                </h3>
              </SkeletonTheme>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
