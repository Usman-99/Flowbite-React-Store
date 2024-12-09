// import { useEffect, useState } from "react";
// import { useCart } from "../context/cartContext";
// import { Pagination } from "flowbite-react";
// import { useNavigate } from "react-router-dom";
// import SpinnerButton from "../components/SpinnerButton";
// import CustomCard from "../components/Card";

// const Product = () => {
//   const navigate=useNavigate()
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState([]);
//   const { addToCart } = useCart();
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(product.length / productsPerPage);

//   useEffect(() => {
//     const fetchFunction = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProduct(data);

//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFunction();
//   }, []);
//   const onPageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="container mx-auto pt-4 py-10 mt-20">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
//       {loading ? (
//         <div className="mb-[50%] md:mb-[80%] lg:mb-[75%] xl:mb-[15%]">
//           <SpinnerButton SpinnerSize="lg" Text={"Loading ..."} TextClass="pl-3 pt-1" />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentProducts.map((item) => (
//               <CustomCard
//                 key={item.id}
//                 image={item.image}
//                 title={item.category}
//                 price={item.price}
//                 rating={item.rating.rate}
//                 viewButton={true}
//                 onAddToCart={() => addToCart(item)}
//                 onViewProduct={() => navigate(`/product/${item.id}`)}
//               />
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className="flex justify-center mt-10">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={onPageChange}
//               showIcons
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Product;
// import { useEffect, useState } from "react";
// import { useCart } from "../context/cartContext";
// import { Pagination } from "flowbite-react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import SpinnerButton from "../components/SpinnerButton";
// import CustomCard from "../components/Card";

// const Product = () => {
//   const navigate = useNavigate();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState([]);
//   const { addToCart } = useCart();
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 6;

//   const category = searchParams.get("category");

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

//   // Filter products by category if a category is selected
//   const filteredProducts = category
//     ? product.filter((item) => item.category === category)
//     : product;

//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   useEffect(() => {
//     const fetchFunction = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFunction();
//   }, []);

//   const onPageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo(0, 0);
//   };

//   const handleCategoryChange = (newCategory) => {
//     setCurrentPage(1);  // Reset to the first page when category changes
//     setSearchParams({ category: newCategory });
//   };

//   return (
//     <div className="container mx-auto pt-4 py-10 mt-20">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

//       {/* Category Filters */}
//       <div className="flex justify-center mb-8 space-x-4">
//         <button
//           className={`py-2 px-4 ${category === "men's clothing" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//           onClick={() => handleCategoryChange("men's clothing")}
//         >
//           Men's Clothing
//         </button>
//         <button
//           className={`py-2 px-4 ${category === "women's clothing" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//           onClick={() => handleCategoryChange("women's clothing")}
//         >
//           Women's Clothing
//         </button>
//         <button
//           className={`py-2 px-4 ${category === "jewelery" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//           onClick={() => handleCategoryChange("jewelery")}
//         >
//           Jewelry
//         </button>
//         <button
//           className={`py-2 px-4 ${category === "electronics" ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//           onClick={() => handleCategoryChange("electronics")}
//         >
//           Electronics
//         </button>
//         <button
//           className={`py-2 px-4 ${!category ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
//           onClick={() => handleCategoryChange("all")}
//         >
//           All
//         </button>
//       </div>

//       {loading ? (
//         <div className="mb-[50%] md:mb-[80%] lg:mb-[75%] xl:mb-[15%]">
//           <SpinnerButton SpinnerSize="lg" Text={"Loading ..."} TextClass="pl-3 pt-1" />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {currentProducts.length > 0 ? (
//               currentProducts.map((item) => (
//                 <CustomCard
//                   key={item.id}
//                   image={item.image}
//                   title={item.title}
//                   price={item.price}
//                   rating={item.rating.rate}
//                   onAddToCart={() => addToCart(item)}
//                   onViewProduct={() => navigate(`/product/${item.id}`)}
//                 />
//               ))
//             ) : (
//               <p className="text-center text-lg col-span-3">No products found in this category</p>
//             )}
//           </div>

//           {/* Pagination */}
//           {filteredProducts.length > productsPerPage && (
//             <div className="flex justify-center mt-10">
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={onPageChange}
//                 showIcons
//               />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Product;
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { Pagination } from "flowbite-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SpinnerButton from "../components/SpinnerButton";
import CustomCard from "../components/Card";
import CustomButton from "../components/Buttons";

const Product = () => {
  const navigate = useNavigate();
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
    <div className="container mx-auto pt-4 py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

      {/* Category Filters */}
      <div className="flex justify-center mb-8 space-x-4">
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
        <div className="mb-[50%] md:mb-[80%] lg:mb-[75%] xl:mb-[15%]">
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
