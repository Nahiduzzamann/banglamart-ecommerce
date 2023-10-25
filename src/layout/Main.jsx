import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import PopUpAdd from "../components/PopUpAdd";
import { useDispatch } from "react-redux";
import { fetchDivisions } from "../services/actions/divisionActions";
import { fetchDistricts } from "../services/actions/districtAction";
import { fetchUpazilas } from "../services/actions/upazilaAction";
import { fetchUnions } from "../services/actions/unionAction";
import { fetchAllCategories } from "../services/actions/allCategoriesAction";
import { fetchFlashSell } from "../services/actions/flashSellCheckAction";
import { Helmet } from "react-helmet";
import { fetchAllSellerData } from "../services/actions/allSellerAction";
import { useContext } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import init from "./../visitor";
import { fetchBargainingProducts } from "../services/actions/bargainingProductAction";
import { fetchForYouProducts } from "../services/actions/forYouProductAction";
import { fetchBestSellingProducts } from "../services/actions/bestSellingAction";
import { fetchNewProducts } from "./../services/actions/newProductsAction";
import { fetchTopProducts } from "./../services/actions/topProductsAction";
import { fetchBrand } from "../services/actions/brandAction";
import socket from "./../socket";
import Chat from "../components/Chat";

const Main = () => {
  const { user } = useContext(AuthContext);
  // const [isLoading, setIsLoading] = useState(true);
  const [adds, setAdds] = useState(false);

  useEffect(() => {
    fetch();

    user &&
      socket.emit("join", {
        user: user,
        id: socket.id,
      });
  }, [user]);

  const fetch = async () => {
    const data = await init(user?.uid);
    localStorage.setItem("visitorId", data?.id);
  };

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
  useEffect(() => {
    dispatch(fetchAllSellerData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchBargainingProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchForYouProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchBestSellingProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchNewProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTopProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);

  // isFlash sell available or not
  useEffect(() => {
    dispatch(fetchFlashSell());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Home | Banglamart E-commerce</title>
      </Helmet>
      <div className={`${adds ? "h-screen overflow-y-hidden" : ""}`}>
        <div className={`${adds ? "block" : "hidden"}`}>
          <PopUpAdd setAdds={setAdds}></PopUpAdd>
        </div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Chat></Chat>

        <ScrollToTop />
      </div>
    </div>
  );
};

export default Main;
