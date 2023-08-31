import { Helmet } from "react-helmet";
import BrandCart from "../../components/BrandCart";
import EmptyContent from "../../components/EmptyContent";
import "./brandButtonStyle.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BrandPage = () => {
  const Categories = [
    {
      id: 1,
      image:
        "https://www.ytechb.com/wp-content/uploads/2023/05/WWDC-2023-Apple-Logo-Wallpaper-2-768x1024.webp",
      name: "Apple",
    },
    {
      id: 2,
      image:
        "https://cdn1.vectorstock.com/i/1000x1000/34/15/letter-e-logo-classic-luxurious-style-logo-vector-22693415.jpg",
      name: "Elegant Styles",
    },
    {
      id: 3,
      image:
        "https://besthqwallpapers.com/Uploads/10-11-2021/181771/thumb2-sony-3d-logo-4k-gray-brickwall-creative-brands.jpg",
      name: "Sony",
    },
    {
      id: 4,
      image: "https://cdn.wallpapersafari.com/95/3/hDI601.jpg",
      name: "LG",
    },
    {
      id: 5,
      image:
        "https://www.glamourpalacesalon.com/wp-content/uploads/2017/04/Logo.png",
      name: "Glamour Palace",
    },
    {
      id: 6,
      image:
        "https://seeklogo.com/images/Y/yamaha-powersports-logo-61B8AD9447-seeklogo.com.png",
      name: "YAMAHA",
    },
    {
      id: 7,
      image:
        "https://api.macaronikid.com/assets/uploads/29e402c6-dced-4268-83db-760dc9768837.png",
      name: "Chic Avenue",
    },
    {
      id: 8,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
      name: "Samsung",
    },
    {
      id: 9,
      image:
        "https://static.vecteezy.com/system/resources/previews/020/190/680/non_2x/oppo-logo-oppo-icon-free-free-vector.jpg",
      name: "Oppo",
    },
    {
      id: 10,
      image:
        "https://www.fashionistagp.com/cdn/shop/files/Fashionista_Ladies_Wear_Logo_e1366656-24b6-4f31-a771-9664acf5589e.jpg?height=628&pad_color=ffffff&v=1655149532&width=1200",
      name: "Fashionista",
    },
    {
      id: 11,
      image:
        "https://static.vecteezy.com/system/resources/previews/020/335/960/non_2x/canon-logo-canon-icon-free-free-vector.jpg",
      name: "Canon",
    },
    {
      id: 12,
      image:
        "https://pbs.twimg.com/profile_images/770891414318243840/dAfH53rt_400x400.jpg",
      name: "Urban Trend",
    },
    {
      id: 13,
      image:
        "https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-logo-png-transparent-xiaomi-logo-images-mi-logo-2.png",
      name: "Xiaomi",
    },
    {
      id: 14,
      image:
        "https://static.vecteezy.com/system/resources/previews/020/927/712/original/suzuki-logo-brand-car-symbol-red-with-name-blue-design-japan-automobile-illustration-free-vector.jpg",
      name: "SUZUKI",
    },
    {
      id: 15,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySe2-mIxOI-tPQ6ya0JVfXgAw0TzecypGYFvOgevJmPzeurWHe2zc9iiqf2A62hNdz_0&usqp=CAU",
      name: "Classy Creations",
    },
  ];
  return (
    <div className="container mx-auto ">
      <Helmet>
        <title>Brand | Banglamart E-commerce</title>
      </Helmet>
      <div id="main" className="mt-4 mb-4">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <Link to="/seller-form" id="animatedButtonBrand"></Link>
        </motion.div>
      </div>
      <div className="bg-CardColor p-4 lg:p-10 mt-4">
        <h1 className=" mb-4 text-SubTextColor">Chose Your Favorite Brand</h1>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
          {Categories ? (
            Categories.map((data, i) => (
              <BrandCart data={data} key={i}></BrandCart>
            ))
          ) : (
            <EmptyContent text="Currently no brand available!!"></EmptyContent>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
