import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { Pagination } from "flowbite-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SpinnerButton from "../components/SpinnerButton";
import CustomCard from "../components/Card";
import CustomButton from "../components/Buttons";
import apiService from "../api/dataservice";
import { useOutletContext } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const {text}=useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const category = searchParams.get("category");

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Filter products by category if a category is selected
  const filteredProducts = category
    ? product.filter((item) => item.category === category)
    : product;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        const data = await apiService.get("/products"); // Just pass the endpoint
        setProduct(data); // Directly set the data without extra error handling
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleCategoryChange = (newCategory) => {
    setCurrentPage(1); // Reset to the first page when category changes
    if (newCategory === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: newCategory });
    }
  };
  const categoryList = [
    { label: "All", value: "all" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Jewelery", value: "jewelery" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Electronics", value: "electronics" },
  ];
  return (
    <div className="container mx-auto pt-4 py-10 mt-6">
      <h1 className="text-4xl font-bold text-center mb-8">{text}</h1>

      {/* Category Filters */}
      <div className="ml-4 mr-4 sm:ml-4 sm:mr-4  lg:justify-center my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
      {categoryList.map((item) => (
          <CustomButton
            key={item.value}
            Text={item.label}
            className={`py-2 px-4 border-2 ${
              (category === item.value || (!category && item.value === "all"))
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black bg-gradient-to-br from-gray-500 to-red hover:text-white"
            }`}
            onClick={() => handleCategoryChange(item.value)}
          />
        ))}
      </div>

      {loading ? (
        <div className="mb-10">
          <SpinnerButton
            SpinnerSize="lg"
            Text={"Loading ..."}
            TextClass="pl-3 pt-1"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <CustomCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating.rate}
                  viewButton={true}
                  onAddToCart={() => addToCart(item)}
                  onViewProduct={() => navigate(`/product/${item.id}`)}
                />
              ))
            ) : (
              <p className="text-center text-lg col-span-3">
                No products found in this category
              </p>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > productsPerPage && (
            <div className="flex justify-center mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                showIcons
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
