import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { FaRegStar } from "react-icons/fa";
import { Pagination } from "flowbite-react";
import { Link } from "react-router-dom";
import CustomButton from "../components/Buttons";
import SpinnerButton from "../components/SpinnerButton";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(product.length / productsPerPage);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFunction();
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto pt-4 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      {loading ? (
        <div className="mb-[50%] md:mb-[80%] lg:mb-[75%] xl:mb-[15%]">
        <SpinnerButton
          SpinnerSize="lg"
          Text={"Loading ..."}
          TextClass="pl-3 pt-1"
        /></div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-5 text-center">
                  <h3 className="text-md lg:text-lg xl:text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-3">${item.price}</p>
                  <div className="flex items-center mb-3">
                    <FaRegStar className="text-amber-400 mr-2 text-lg" />
                    <span className="text-gray-600">
                      {item.rating.rate} / 5
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <CustomButton
                      Text={"Add to Cart"}
                      onClick={() => addToCart(item)}
                      className="bg-blue-500"
                    />
                    <Link to={`/product/${item.id}`}>
                      <CustomButton
                        Text={"View Product"}
                        className={"bg-emerald-600 ml-2"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
