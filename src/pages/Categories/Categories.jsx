import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Categories = () => {
  const [Categories, setCategories] = useState(null);
  // TODO
  const url = "http://192.168.1.11:1300";
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/category/getAll`);
        const data = await response.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchCategories();
  }, []);
  console.log(Categories);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="pt-4 pb-4">Categories</h1>
        {Categories ? (
          Categories?.map((category, i) => (
            <button
              key={i}
              className="bg-CardColor rounded-md hover:bg-MainColor hover:text-CardColor p-1 border-[1px] border-BorderColor mr-2 mb-2"
            >
              {category.name}
            </button>
          ))
        ) : (
          <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
            <h3>
              <Skeleton count={2} />
            </h3>
          </SkeletonTheme>
        )}
      </div>
    </div>
  );
};

export default Categories;
