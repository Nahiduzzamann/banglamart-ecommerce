import { useEffect, useState } from "react";
const AllCategory = () => {
  const [categorys, setCategorys] = useState([]);
  const [categoryHover, setCategoryHover] = useState(false);

  const url = "http://192.168.1.11:1300";
  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const response = await fetch(`${url}/category/getAll`);
        const data = await response.json();
        setCategorys(data.data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchCategorys();
  }, []);

  return (
    <div className="max-h-[495px] overflow-y-auto rounded-lg">
      <div className="bg-MainColor p-3 sticky">
        <h2 className="text-CardColor">All Categories</h2>
      </div>
      <div className="bg-CardColor p-3 ">
        {categorys?.map((category) => (
          <button
            onMouseEnter={() => setCategoryHover(true)}
            onMouseLeave={() => setCategoryHover(false)}
            key={category.id}
            className="flex p-1 items-center"
          >
            {/* TODO  */}
            <img
              className="h-6 w-6 mr-2"
              crossOrigin="anonymous"
              src={`${url}${category.icon}`}
              alt=""
            />
            <h3 className="text-SubTextColor hover:text-TextColor">
              {category.name}
            </h3>
          </button>
        ))}
       
      </div>
    </div>
  );
};

export default AllCategory;
