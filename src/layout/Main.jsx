import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Loading from "../components/Loading";
import PopUpAdd from "../components/PopUpAdd";
import { useDispatch } from "react-redux";
import { fetchDivisions } from "../services/actions/divisionActions";
import { fetchDistricts } from "../services/actions/districtAction";
import { fetchUpazilas } from "../services/actions/upazilaAction";
import { fetchUnions } from "../services/actions/unionAction";
import { fetchAllCategories } from "../services/actions/allCategoriesAction";
import { fetchFlashSell } from "../services/actions/flashSellCheckAction";
import { Helmet } from "react-helmet";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [adds, setAdds] = useState(true);
// loading animation 
  useEffect(() => {
    // Simulate a delay to demonstrate loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

// data load 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDivisions());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDistricts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUpazilas());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUnions());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  // isFlash sell available or not 
  useEffect(() => {
    dispatch(fetchFlashSell());
  }, []);
  

  return (
    <div>
      <Helmet>
        <title>Home | Banglamart E-commerce</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={`${adds? 'h-screen overflow-y-hidden':''}`}>
          <div className={`${adds? 'block':'hidden'}`}><PopUpAdd setAdds={setAdds}></PopUpAdd></div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default Main;
