import { useState } from "react";
import { Link } from "react-router-dom";

const BrandCart = ({ data }) => {
  const encodedData = encodeURIComponent(JSON.stringify(data));

  const [hover, setHover] = useState(false);
  const url = "http://62.72.31.204:1300";

  return (
    <Link to={`/brand-product-page?data=${encodedData}`}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-[95%] bg-CardColor cursor-pointer group aspect-[25/20] rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor hover:shadow-md"
      >
        <div className="inset-0 absolute w-full aspect-[20/14] group-hover:scale-110 ease-in-out duration-300">
          <img
            src={`${url}${data?.brandIcon}`}
            crossOrigin="anonymous"
            className="object-fill w-full aspect-[20/14]"
          />
        </div>
        <div
          className={`absolute bottom-0 w-full ${
            hover ? "bg-MainColor" : "bg-[#fffffff8]"
          }`}
        >
          <div className="">
            <Link
              to={`/brand-product-page?data=${encodedData}`}
              className={`p-1 flex justify-center ${
                hover ? "text-CardColor underline" : "text-SubTextColor"
              } `}
            >
              {data?.brandName}
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCart;
