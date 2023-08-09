import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import SubCategory from "../../components/SubCategories";

const Categories = () => {
  const [Categories, setCategories] = useState(null);
  const [subCategories, setSubCategories] = useState(null);
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

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch(`${url}/category/getSubCategory`);
        const data = await response.json();
        setSubCategories(data);
      } catch (error) {
        console.error("Error fetching instructor classes:", error);
      }
    };

    fetchSubCategories();
  }, []);

  console.log(subCategories);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="pt-4 pb-4">Categories</h1>
        {Categories ? (
          Categories?.map((category, i) => {
            return (
              <button
                key={i}
                className="bg-CardColor rounded-md hover:bg-MainColor hover:text-CardColor p-1 border-[1px] border-BorderColor mr-2 mb-2"
              >
                {category.name}
              </button>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
            <h3>
              <Skeleton count={2} />
            </h3>
          </SkeletonTheme>
        )}
        <div className="p-2 flex justify-around">
          {/* {subCategories?.map((subCategories, i) => (
            <SubCategory subCategories={subCategories} key={i}></SubCategory>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
