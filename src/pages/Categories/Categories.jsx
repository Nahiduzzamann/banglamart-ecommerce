import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SubCategory from "../../components/SubCategories";

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

  const handleCategorySearch = (name) => {
    const targetElement = document.getElementById(name);
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
    targetElement.style.backgroundColor = "#5dade2";
  };

  return (
    <div className="p-1 lg:p-0">
      <div className="container mx-auto">
        <h1 className="pt-4 pb-4">All Categories</h1>
        <div className="flex flex-wrap">
          {Categories ? (
            Categories.map((category, i) => {
              return (
                <button
                  onClick={() => handleCategorySearch(category.name)}
                  key={i}
                  className="rounded-md bg-MainColor hover:bg-MainColorHover text-CardColor p-2 border-[1px] border-BorderColor mr-2 mb-2"
                >
                  {category.name}
                </button>
              );
            })
          ) : (
            <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
              <h3>
                <Skeleton count={3} />
              </h3>
            </SkeletonTheme>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 gap-2">
          {Categories ? (
            Categories?.map((category, i) => {
              return (
                <div
                  id={`${category.name}`}
                  key={i}
                  className=" bg-CardColor rounded-md border-[1px] border-BorderColor"
                >
                  <div className="p-2">
                    <h1 className="text-center p-1 border-b-[3px] border-b-BorderColor">
                      {category.name}
                    </h1>
                    <div className="p-2 ">
                      {category?.subCategory.map((subCategories, i) => (
                        <SubCategory
                          key={i}
                          subCategories={subCategories}
                        ></SubCategory>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <SkeletonTheme baseColor="#5dade2" highlightColor="#FAD7A0">
              <h3>
                <Skeleton count={3} />
              </h3>
            </SkeletonTheme>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
