import BrandCart from "../../components/BrandCart";

const BrandPage = () => {
    const Categories = [
        {
          id: 1,
          name: "Samsung",
          href: "/",
          image:
            "https://banglamartecommerce.com/public/uploads/all/TWjgWy18rJFdVbLw3UlLlYOhzAGFN1EO4VJlxLqY.png",
        },
        {
          id: 2,
          name: "Sony",
          href: "/",
          image:
            "https://banglamartecommerce.com/public/uploads/all/V4ocaHg8gsJjD7sHLPzW1Rv7f3uHn5HHkcG53uLM.png",
        },
        {
          id: 3,
          name: "Canon",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/LJo6SY6kiOjQbjD9y03xGwhltH0xQmYzsMNUR0SB.png",
        },
        {
          id: 4,
          name: "Shaowmi",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/thvGEjxTkdRYQP3LG0cJ6VwzLLsMwEK2evsiHjSj.png",
        },
        {
          id: 5,
          name: "Symphony",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/fKzLfPh3iCrTSBjSSn8aywBVf6JskLt7GDHOXgc4.jpg",
        },
        {
          id: 6,
          name: "LG",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/nATwNMgTp3SyPWazFIPfj0hk2AOrASZXEE9lMpuc.png",
        },
        {
          id: 7,
          name: "Huawei",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/DqIXFAOzCElMOWRaVYBRfJUPL8q0HAM6XYEMLoi5.jpg",
        },
        {
          id: 8,
          name: "Oppo",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/tFqlLqF179N7NwJ3ZOWfoxSdkpKpeC3aM9ugxhWZ.png",
        },
        {
          id: 9,
          name: "Yamaha",
          href: "/",
          image:
            "https://banglamartecommerce.com/public/uploads/all/43VEXCh4MiMtWOsBMk34WYwozfWWF0jcMxs49qYn.png",
        },
        {
          id: 10,
          name: "Suzuki",
          href: "/",
          image:
            "	https://banglamartecommerce.com/public/uploads/all/1hWjVqkIzP5no5zjblJjHvK0dmHH0lUdSA6gm7U1.png",
        },
      ];
    return (
        <div className="container mx-auto shadow-CardColor pt-4 lg:mt-10">
            <h1 className="border-b border-b-BorderColor mb-4 text-SubTextColor">Chose Your Favorite Brand</h1>
            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
                 {
                    Categories.map((categorie,i) => (

                        <BrandCart categorie={categorie} key={i}></BrandCart>
                    ))
                 }   
            </div>
        </div>
    );
};

export default BrandPage;