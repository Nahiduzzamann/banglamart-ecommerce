import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubCategory = ({subCategory}) => {
    const [options,setOptions] = useState(null)

    const url = "http://192.168.1.11:1300";
  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const response = await fetch(`${url}/category/getOptions?subCategoryId=${subCategory.id}`);
        const data = await response.json();
        setOptions(data.data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchCategorys();
  }, [subCategory]);

    console.log(options);

  return (
    <div>
      <h2 className="text-BorderColor mb-1">{subCategory.name}</h2>
      <div className="pl-2 ml-1 border-l-2 border-l-BorderColor">
      {options ? (
          options?.map((option,i) => {
            // console.log(category);
            return (
              <button
                
                key={i}
                className="flex p-1"
              >
                <p className="text-CardColor hover:underline tracking-[2px]">{option.name}</p>
              </button>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#FAD7A0" highlightColor="#fff">
            <h3>
              <Skeleton count={3} />
            </h3>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
