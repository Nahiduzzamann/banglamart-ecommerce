
const Blog = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl pt-8 font-bold text-center">Blog</h1>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Top Selling</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Recent Posts Cards */}
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://images.unsplash.com/photo-1658124974726-d96bc44783cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXBwbGUlMjBNYWNCb29rJTIwUHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                            alt="Recent Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Apple MacBook Pro</h3>
                            <p className="text-gray-600">
                            Our most powerful laptops, supercharged by M1 and M2 chips. Featuring Magic Keyboard, Touch Bar, Touch ID, and brilliant Retina display.
                            </p>
                            
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/OqA1uE9lKSFrSJOnKFD9AIWLlEDbYtOQ1AKQByhJ.jpg"
                            alt="Recent Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Adidas T-19 Treadmill</h3>
                            <p className="text-gray-600">
                            The adidas T-19 treadmill is built around a robust 3.5 Hp motor, which delivers speeds of up to 12.4 mph across 15 levels of power incline.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/F1KxWJnbOawb7AwAoVnv1Nhonwfyvj9Xqj2pG1at.jpg"
                            alt="Recent Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Men's Long Sleeve All-Purpose Shirt</h3>
                            <p className="text-gray-600">
                            Made with partially recycled sweat-wicking and comfort-stretch fabric for durable 360-degree motion, this shirt keeps you fresh when you're on the move.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Popular Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Popular Posts Cards */}
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/UwT7zX5ARyYKFdDwONpnqMryjoEwybmAtKQbzNQP.png"
                            alt="Popular Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Yamaha YZF R15 Bike</h3>
                            <p className="text-gray-600">
                            Yamaha R15S is a motorcycle with a starting price of Rs 1.63 Lakh. It is available in India in 1 variant and 2 colours with high end variant price starting ...
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/ZHzEo4IQT5n4iAAYsvDrfAGv4SLfW8at66Vp9IrI.png"
                            alt="Popular Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Suzuki GSX-R 150 DUAL ABS FI</h3>
                            <p className="text-gray-600">
                            The legendary GSX-R 150 Dual ABS (Fi) Ready to reign. It is the most powerful, hardest-accelerating, cleanest-running GSX-R Dual ABS ever built. It is the most ...
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/mX725kRPWmv5A7EJdSVZ1rgUaXQ6StYtiAomkhrY.png"
                            alt="Popular Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">YAMAHA RAY-ZR Scooter</h3>
                            <p className="text-gray-600">
                            RayZR 125 Fi is built on the concept of “Armoured Energy”. A sturdy built design and weight that's at 99kgs makes your ride agile and quick. The “Motorcycle- ...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Men's Shopping</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Men's Shopping Cards */}
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/0x7cZqpPiKYZ2f0LFQQSomepRZ0uueq2RKnrhBXv.jpg"
                            alt="Men's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Product Title 1</h3>
                            <p className="text-gray-600 mb-4">
                                TK 2250
                            </p>
                            <a  href='https://banglamartecommerce.com/category/mens-fashion' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/hhxfOPvfEJFBx9fjhiEb2hFYSKE7eDLMn1WcDwRK.jpg"
                            alt="Men's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Product Title 2</h3>
                            <p className="text-gray-600 mb-4">
                                TK 999
                            </p>
                            <a  href='https://banglamartecommerce.com/category/mens-fashion' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/MstpEzpiIKrQfUaTwHVtvP8n1jocVH0g1WTFwJY7.jpg"
                            alt="Men's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Product Title 3</h3>
                            <p className="text-gray-600 mb-4">
                                TK 350
                            </p>
                            <a href='https://banglamartecommerce.com/category/mens-fashion' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Women's Shopping</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Women's Shopping Cards */}
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/0hidluhcNMqwlrHI8XngXisAU6a1zgYWdMHOhEVk.jpg"
                            alt="Women's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Women's Fashion</h3>
                            <p className="text-gray-600 mb-4">
                                
                            </p>
                            <a href='https://banglamartecommerce.com/category/womens-fashion' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/roFiX288Gv7OhIDWfM97mbKFuV93yRUTVlxPufqh.png"
                            alt="Women's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Health & Beauty</h3>
                            <p className="text-gray-600 mb-4">
                                
                            </p>
                            <a href='https://banglamartecommerce.com/category/health-and-beauty' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/PFL8Qkh7yLYDqnswJnPhZRP9747KxMYT5Wb5wHpj.jpg"
                            alt="Women's Shopping"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Super Shop</h3>
                            <p className="text-gray-600 mb-4">
                                
                            </p>
                            <a href='https://banglamartecommerce.com/category/latest-in-womens-fashion' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-8">
                <h2 className="text-2xl font-bold mb-4">Variety Items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Variety Items Cards */}
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/K2Jh5zD5oFEHi7bkTsWhxuo4hHJrlQyu1gg4aDJb.png"
                            alt="Variety Items"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Gifts</h3>
                            <p className="text-gray-600 mb-4">
                                TK 99.99
                            </p>
                            <a href='https://banglamartecommerce.com/categories' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/yTbio1Hmot5b2BdeCQ0VGYdONczpxSxkR0ir6sz3.png"
                            alt="Variety Items"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Baby Toy</h3>
                            <p className="text-gray-600 mb-4">
                                TK 99.99
                            </p>
                            <a href='https://banglamartecommerce.com/categories' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="https://banglamartecommerce.com/public/uploads/all/8cfAS05eg7AysqbecVrnoknK4aNwnStTRlCHyXkm.png"
                            alt="Variety Items"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">Home & Life Style</h3>
                            <p className="text-gray-600 mb-4">
                                TK 999.99
                            </p>
                            <a href='https://banglamartecommerce.com/category/home-and-lifestyle' target='blank' className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
