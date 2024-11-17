import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

interface ProductType {
  id: number;
  image: string;
  name: string;
  price: number;
  waadmin: string;
  location: string;
  description?: string; // optional description field
}

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const productData: ProductType[] = [
        {
            id: 1,
            image: "https://vapeku88.com/wp-content/uploads/2023/11/e444dab5-cb2d-4b05-9d39-46375a2be770.jpg",
            name: "Bequ Lights",
            price: 105000,
            waadmin: "+62895360861452",
            location: "Cikarang",
        },
        {
            id: 2,
            image: "https://th.bing.com/th/id/OIP.X9ilRO5t_RQPIy_bcfPoxAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7",
            name: "Bequ Hooydew",
            price: 120000,
            waadmin: "+628978309294",
            location: "Cikarang",
        },
        {
            id: 3,
            image: "https://vapeku88.com/wp-content/uploads/2023/12/86d7c15c-3d58-4bcd-a3f8-6a6aaf8c8b30.jpg",
            name: "Bequ Lemonade",
            price: 120000,
            waadmin: "+6285761929146",
            location: "Cikarang",
        },
        {
            id: 4,
            image: "https://th.bing.com/th/id/OIP.wXPeziDxpYQ2fxaYYEqKRgHaHa?rs=1&pid=ImgDetMain",
            name: "Bequ Cola",
            price: 120000,
            waadmin: "+628978309294",
            location: "Cikarang",
        },
    ];
    const foundProduct = productData.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) return <p>Product not found</p>;

  const formatRupiah = (number: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);
};

  const message = `Apakah stok masih ada untuk barang ${product.name}?`;
  const waLink = `https://wa.me/${product.waadmin.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <>
   <Navbar/>
    <div key={product.id} className="mt-6 mx-4 font-inter">
      <img src={product.image} alt={product.name} className="w-[550px]" />
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold mt-1">{product.name}</h2>
        <h2 className="text-3xl font-bold mt-1">{formatRupiah(product.price)}</h2>
      </div>
      <div>
        <Link to={waLink} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="px-6 font-semibold py-2 my-2 border-black border-2 p-2.5 bg-green-300 hover:bg-green-400 shadow-[2px_2px_0px_rgba(0,0,0,1)] text-black"
          >
            <div className="flex items-center space-x-1">
              <FaWhatsapp className="text-2xl" />
              <h1>Chat Sekarang</h1>
            </div>
          </button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold">Deskripsi</h2>
      <div className="w-full h-[2px] bg-black my-2"></div>
      <h3>{product.description}</h3>
    </div>
    <Footer/>
    </>
  );
};

export default ProductDescription;
