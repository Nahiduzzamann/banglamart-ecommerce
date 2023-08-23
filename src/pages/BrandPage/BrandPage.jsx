import BrandCart from "../../components/BrandCart";
import EmptyContent from "../../components/EmptyContent";

const BrandPage = () => {
  const Categories = false
  return (
    <div className="container mx-auto shadow-CardColor pt-4 lg:mt-10">
      <h1 className=" mb-4 text-SubTextColor">Chose Your Favorite Brand</h1>
      <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {
            Categories?(Categories.map((categorie, i) => (
                <BrandCart categorie={categorie} key={i}></BrandCart>
              ))):(<EmptyContent text='Currently no brand available!!'></EmptyContent>)
        }
        
      </div>
    </div>
  );
};

export default BrandPage;
