import { useState } from "react";

const BrandCart = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        //router.push(data.href);
      }}
      className="w-[95%] bg-CardColor cursor-pointer group aspect-[25/20] rounded-xl relative overflow-hidden border border-BorderColor hover:border-MainColor hover:shadow-md"
    >
      <div className="inset-0 absolute w-full aspect-[20/14] group-hover:scale-110 ease-in-out duration-300">
        <img
          src={data.image}
          className="object-fill w-full aspect-[20/14]"
        />
      </div>
      <div
        className={`absolute bottom-0 w-full ${
          hover ? "bg-MainColor" : "bg-[#ffffffd7]"
        }`}
      >
        <div className="">
          <p
            className={`p-1 text-center ${
              hover ? "text-CardColor" : "text-TextColor"
            } `}
          >
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandCart;
