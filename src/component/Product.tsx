import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiMap } from "react-icons/bi";

interface productType {
    id: number;
    image: string;
    name: string;
    price: number;
    waadmin: string;
    location: string;
}

const Product = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string>("");

    const product: productType[] = [
        {
            id: 1,
            image: "https://vapeku88.com/wp-content/uploads/2023/11/e444dab5-cb2d-4b05-9d39-46375a2be770.jpg",
            name: "Bequ Lights",
            price: 105000,
            waadmin: "0895360861452",
            location: "Cikarang",
        },
        {
            id: 2,
            image: "https://th.bing.com/th/id/OIP.X9ilRO5t_RQPIy_bcfPoxAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7",
            name: "Bequ Hooydew",
            price: 120000,
            waadmin: "0895360861452",
            location: "Cikarang",
        },
        {
            id: 3,
            image: "https://vapeku88.com/wp-content/uploads/2023/12/86d7c15c-3d58-4bcd-a3f8-6a6aaf8c8b30.jpg",
            name: "Bequ Lemonade",
            price: 120000,
            waadmin: "0895360861452",
            location: "Cikarang",
        },
        {
            id: 4,
            image: "https://th.bing.com/th/id/OIP.wXPeziDxpYQ2fxaYYEqKRgHaHa?rs=1&pid=ImgDetMain",
            name: "Bequ Cola",
            price: 120000,
            waadmin: "0895360861452",
            location: "Cikarang",
        },
        // Add other products here
    ];

    const handleClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    const formatRupiah = (number: number): string => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(number);
    };

    // Filter products by name based on search query
    const filteredProducts = product.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* Search Input */}
            <div className="mb-4 px-2 mt-1 ">
                <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border rounded" 
                />
            </div>

            {/* Check if any products match the search query */}
            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500">Produk tidak ditemukan</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <div
                            className="bg-white rounded-lg shadow-md font-inter p-4 transition-transform transform hover:scale-105"
                            key={product.id}
                        >
                            <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-lg border border-gray-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    onClick={() => handleClick(product.id)}
                                    className="object-cover object-center w-full h-full cursor-pointer"
                                />
                            </div>
                            <h3 className="mt-2 text-sm font-semibold text-gray-800">{product.name}</h3>
                            <h2 className="text-base font-bold text-gray-700">{formatRupiah(product.price)}</h2>
                            <div className="flex justify-between mt-2 text-gray-500 text-xs">
                            <div className="flex items-center mb-3 ml-1">
                                <BiMap />
                                <p className="md:text-sm text-xs ">{product.location}</p>
                            </div>
                                    <button
                                        onClick={() => handleClick(product.id)}
                                        type="button"
                                        className="px-3 py-1 text-sm bg-green-400 text-black rounded hover:bg-green-500 border-b-4 border-r-4 border-gray-800"
                                    >
                                        Beli
                                    </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Product;
