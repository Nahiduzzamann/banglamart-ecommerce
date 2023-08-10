import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const SubCategory = ({ subCategories }) => {
  const [options, setOptions] = useState(null);
  // console.log(subCategories);

  const url = "http://192.168.1.11:1300";
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${url}/category/getOptions?subCategoryId=${subCategories?.id}`
        );
        const data = await response.json();
        setOptions(data.data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchCategories();
  }, [subCategories]);

// console.log(options);
  return (
    <div className="">
      <h2 className="text-TextColor mb-1 mr-4">
        {subCategories ? (
          subCategories.name
        ) : (
          <SkeletonTheme baseColor="#FAD7A0" highlightColor="#fff">
            <p>
              <Skeleton count={1} />
            </p>
          </SkeletonTheme>
        )}
      </h2>
      <div className="pl-1 ml-1 mb-4 border-l-2 border-l-BorderColor ">
        {options ? (
          options.map((option, i) => {
            // console.log(category);
            return (
              <Link to='/products' key={i} className="flex p-1">
                <p className="text-SubTextColor hover:text-TextColor hover:underline tracking-[2px]">
                  {option.name}
                </p>
              </Link>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#FAD7A0" highlightColor="#fff">
            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
