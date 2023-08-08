import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiFillCaretRight } from "react-icons/ai";
const AllCategory = () => {
  const [categorys, setCategorys] = useState(null);
  const [subCategorys, setSubCategorys] = useState([]);
  const [subCategoryHover, setSubCategoryHover] = useState(false);
  const [categoryHover, setCategoryHover] = useState({
    isHover: false,
    category: {},
  });

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
 
  const handleSubCategory =(subCategory) => {
      // console.log(subCategory);
  }
  return (
    <div className="relative ">
      <div className="bg-MainColor p-3 rounded-lg">
        <h2 className="text-CardColor">All Categories</h2>
      </div>
      <div className="bg-CardColor p-3  max-h-[495px] overflow-y-auto">
        {categorys ? (
          categorys?.map((category) => {
            // console.log(category);
            return (
              <button
                onMouseEnter={() => {
                  handleSubCategory(category.subCategory)
                  setCategoryHover({ isHover: true, category: category });
                  setSubCategorys(category.subCategory);
                }}
                onMouseLeave={() =>
                  setCategoryHover({ isHover: false, category: category })
                }
                key={category.id}
                className="flex pl-2 pt-2 pb-2 items-center w-full"
              >
                {/* TODO  */}
                <img
                  className="h-6 w-6 mr-2"
                  crossOrigin="anonymous"
                  src={`${url}${category.icon}`}
                  alt=""
                />
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-SubTextColor hover:text-TextColor">
                    {category.name}
                  </h3>
                  {categoryHover.isHover || subCategoryHover ? (
                    <div>
                      {categoryHover.category.name === category.name && (
                        <div>
                          <AiFillCaretRight className="text-MainColor" />
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </button>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
            <h3>
              <Skeleton count={8} />
            </h3>
          </SkeletonTheme>
        )}
        {categoryHover.isHover || subCategoryHover ? (
          <div
            onMouseEnter={() => {
              setSubCategoryHover(true);
            }}
            onMouseLeave={() => setSubCategoryHover(false)}
          >
            <div className="absolute -top-1 2xl:left-[347px] 2xl:h-[500px] xl:h-[470px] lg:h-[390px] 2xl:pl-[40px] xl:pl-[33px] lg:pl-[40px] xl:left-[290px] lg:left-[220px] z-50">
              <div className="bg-MainColor rounded-md p-2 2xl:min-w-[1150px] xl:min-w-[958px] lg:min-w-[765px] ">
                <h1 className="text-center text-CardColor p-4">
                  {categoryHover.category.name}
                </h1>
                <div className="p-2 flex justify-around">
                  {subCategorys.map((subCategory, i) => (
                    <div key={i}>
                      <h2 className="text-CardColor mb-1">{subCategory.name}</h2>
                      <div className="pl-2">
                        <p>hiiii</p>
                        <p>hiiii</p>
                        <p>hiiii</p>
                        <p>hiiii</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AllCategory;
