import { useEffect } from "react";
import EmptyContent from "../../components/EmptyContent";
import FlashSaleBanner from "../../components/FlashSaleBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlashSellData } from "../../services/actions/flashSellDataAction";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductCartFlashSell from "../../components/ProductCartFlashSell";

const FlashSalePage = () => {
  const dispatch = useDispatch();

  const flashSellId = useSelector((state) => state.flashSell.flashSell?.data[0]?.id);
  // console.log(flashSellId);
  useEffect(() => {
    dispatch(fetchFlashSellData(flashSellId));
  }, [flashSellId]);
  const flashSellData = useSelector(
    (state) => state.flashSellData?.flashSellData?.data
  );

  return (
    <div className="container mx-auto">
      <div>
        <FlashSaleBanner></FlashSaleBanner>
      </div>
      <div className="m-1 lg:m-0">
        <div className="mt-4">
          <h1 className="text-SubTextColor mb-4">Hunt Special Offer</h1>
        </div>
        <div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {flashSellData ? (
              flashSellData?.length > 0 ? (
                flashSellData?.map((data, i) => (
                  <ProductCartFlashSell data={data} key={i}></ProductCartFlashSell>
                ))
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
