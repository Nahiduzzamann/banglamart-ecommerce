import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/Home/Home";
import { I18nextProvider } from "react-i18next";
import enTranslation from "../public/en.json";
import bnTranslation from "../public/bn.json";
import i18n from "i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import Categories from "./pages/Categories/Categories";
import Products from "./pages/Products/Products";
import AuthProvider from "./providers/AuthProvider";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import TermsConditions from "./pages/Home/TermsConditions/TermsConditions";
import SellerPolicy from "./pages/SellerPolicy/SellerPolicy";
import CancellationPolicy from "./pages/CancellationPolicy/CancellationPolicy";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy/ReturnPolicy";
import SupportPolicy from "./pages/SupportPolicy/SupportPolicy";
import Faq from "./pages/Faq/Faq";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import AddDeliveryAddressForm from "./pages/AddAddress/AddAddress";
import { Provider } from "react-redux";
import store from "./services/store/store";
import SellerForm from "./pages/SellerForm/SellerForm";
import AllSeller from "./pages/AllSeller/AllSeller";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FlashSalePage from "./pages/FlashSale/FlashSale";
import BrandPage from "./pages/BrandPage/BrandPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import Support from "./pages/Support/Support";
import BargainingProductsPage from "./pages/BargainingProductsPage/BargainingProductsPage";
import Profile from "./pages/Profile/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import BrandProductsPage from "./pages/BrandProductsPage/BrandProductsPage";
import VariousProductsPage from "./pages/VariousProducts/VariousProducts";
import ForYouProductsPage from "./pages/ForYouProductsPage/ForYouProductsPage";
import SignUpWithPhone from "./pages/PhoneAuthentication/PhoneAuthentication";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Main />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Categories></Categories>,
      },
      {
        path: "/products/:id",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <SignUp></SignUp>,
      },
      {
        path: "/termsConditions",
        element: <TermsConditions></TermsConditions>,
      },
      {
        path: "/sellerPolicy",
        element: <SellerPolicy></SellerPolicy>,
      },
      {
        path: "/cancellationPolicy",
        element: <CancellationPolicy></CancellationPolicy>,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/returnPolicy",
        element: <ReturnPolicy></ReturnPolicy>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/supportPolicy",
        element: <SupportPolicy></SupportPolicy>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/addDeliveryAddress",
        element: <AddDeliveryAddressForm></AddDeliveryAddressForm>,
      },
      {
        path: "/seller-form",
        element: <SellerForm></SellerForm>,
      },
      {
        path: "/all-seller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/flash-sell",
        element: <FlashSalePage></FlashSalePage>,
      },
      {
        path: "/brands",
        element: <BrandPage></BrandPage>,
      },
      {
        path: "/shop-page",
        element: <ShopPage></ShopPage>,
      },
      {
        path: "/track-order",
        element: <TrackOrder></TrackOrder>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/bargaining-products",
        element: <BargainingProductsPage></BargainingProductsPage>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/notifications",
        element: <NotificationPage></NotificationPage>,
      },
      {
        path: "/for-you-product-page",
        element: <ForYouProductsPage></ForYouProductsPage>
      },
      {
        path: "/brand-product-page",
        element: <BrandProductsPage></BrandProductsPage>,
      },
      {
        path: "/various-products-page",
        element: <VariousProductsPage></VariousProductsPage>,
      },
      {
        path: "/signUp-phone-page",
        element: <SignUpWithPhone></SignUpWithPhone>
      },
    ],
  },
]);

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: enTranslation,
    },
    bn: {
      translation: bnTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <AuthProvider>
          <div className="bg-BackgroundColor">
            <I18nextProvider i18n={i18n}>
              <RouterProvider router={router} />
            </I18nextProvider>
          </div>
        </AuthProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
