import { Link } from "react-router-dom";

const Cart = () => {
  const dummyProductData = [
    {
      id: 1,
      sellerShopImage: "path/to/shop1.jpg",
      sellerShopName: "Fashion Trends",
      productImage: "path/to/product1.jpg",
      productName: "Women's Casual Dress",
      variant: "Blue, Medium",
      price: "$29.99",
    },
    {
      id: 2,
      sellerShopImage: "path/to/shop2.jpg",
      sellerShopName: "Electronics Hub",
      productImage: "path/to/product2.jpg",
      productName: "Wireless Bluetooth Headphones",
      variant: "Black",
      price: "$49.99",
    },
    {
      id: 3,
      sellerShopImage: "path/to/shop3.jpg",
      sellerShopName: "Home Decor Emporium",
      productImage: "path/to/product3.jpg",
      productName: "Modern Table Lamp",
      variant: "White",
      price: "$39.99",
    },
    {
      id: 4,
      sellerShopImage: "path/to/shop4.jpg",
      sellerShopName: "Tech Gadgets Store",
      productImage: "path/to/product4.jpg",
      productName: "Smartphone Tripod Stand",
      variant: "Adjustable Height",
      price: "$19.99",
    },
    {
      id: 5,
      sellerShopImage: "path/to/shop5.jpg",
      sellerShopName: "Beauty Essentials",
      productImage: "path/to/product5.jpg",
      productName: "Rose-Infused Face Serum",
      variant: "30ml",
      price: "$34.99",
    },
    {
      id: 6,
      sellerShopImage: "path/to/shop6.jpg",
      sellerShopName: "Fitness Gear Shop",
      productImage: "path/to/product6.jpg",
      productName: "Yoga Mat",
      variant: "Purple",
      price: "$25.99",
    },
    {
      id: 7,
      sellerShopImage: "path/to/shop7.jpg",
      sellerShopName: "Books Unlimited",
      productImage: "path/to/product7.jpg",
      productName: "Best-Selling Novel",
      variant: "Paperback",
      price: "$12.99",
    },
    {
      id: 8,
      sellerShopImage: "path/to/shop8.jpg",
      sellerShopName: "Kitchen Essentials",
      productImage: "path/to/product8.jpg",
      productName: "Non-Stick Cookware Set",
      variant: "10-Piece Set",
      price: "$89.99",
    },
    {
      id: 9,
      sellerShopImage: "path/to/shop9.jpg",
      sellerShopName: "Pet Supplies Hub",
      productImage: "path/to/product9.jpg",
      productName: "Interactive Dog Toy",
      variant: "Blue",
      price: "$14.99",
    },
    {
      id: 10,
      sellerShopImage: "path/to/shop10.jpg",
      sellerShopName: "Sports Gear Outlet",
      productImage: "path/to/product10.jpg",
      productName: "Men's Running Shoes",
      variant: "Gray, Size 10",
      price: "$59.99",
    },
  ];
  return (
    <div className="container mx-auto m-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-CardColor md:col-span-3 col-span-4">
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
          <div>ok</div>
        </div>
        <div className="rounded-md p-4 bg-CardColor md:col-span-1 col-span-4">
          <div className="flex flex-col justify-center items-center p-2 bg-BackgroundColor rounded">
            <p className="text-TextColor">Please add your address</p>
            <Link className="bg-TextColor pl-4 pr-4 p-1 rounded mt-1">
              <p className="text-CardColor ">Add Address</p>
            </Link>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Subtotal</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <div className="flex justify-between mt-2">
            <h3 className="text-SubTextColor">Subtotal</h3>
            <h3 className="text-TextColor">1654 ৳</h3>
          </div>
          <div className="flex justify-center items-center bg-TextColor mt-2 p-1 rounded-sm">
            <h2 className="text-CardColor">Confirm Order</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
