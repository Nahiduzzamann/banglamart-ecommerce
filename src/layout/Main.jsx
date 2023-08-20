import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Loading from "../components/Loading";
import PopUpAdd from "../components/PopUpAdd";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [adds, setAdds] = useState(false);

  useEffect(() => {
    // Simulate a delay to demonstrate loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
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
