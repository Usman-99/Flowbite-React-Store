// import { useEffect, useState } from "react";
// import { useCart } from "../context/cartContext";
// import { FaRegStar } from "react-icons/fa";
// import { Button, Spinner } from "flowbite-react";
// const Product = () => {
//   const [loading, setLoading] = useState(true);
//   const [product, setProduct] = useState([]);
//   const { addToCart } = useCart(); // Using Cart Context to add items to cart

//   useEffect(() => {
//     const fetchFunction = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false); // Set loading to false once the data is fetched
//       }
//     };
//     fetchFunction();
//   }, []);

//   return (
//     <div className="container mx-auto py-10 mt-20">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
//        {/* Show loading message while fetching data */}
//        {loading ? (
//          <div className="text-center text-lg flex justify-center items-center"><Button>
//          <Spinner aria-label="Spinner button example" size="lg" />
//          <span className="pl-3 pt-1">Loading...</span>
//        </Button></div>
//       ) : (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {product.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-48 object-contain"
//             />
//             <div className="p-5 text-center">
//               <h3 className="text-sm lg:text-lg xl:text-lg font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-700 mb-3">${item.price}</p>
//               <div className="flex items-center mb-3">
//               <FaRegStar className="text-amber-400 mr-2 text-lg"/>
//                 <span className="text-gray-600">{item.rating.rate} / 5</span>
//               </div>
//               <button
//                 onClick={() => addToCart(item)}
//                 className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>)}
//     </div>
//   );
// };

// export default Product;

import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { FaRegStar } from "react-icons/fa";
import { Button, Spinner, Pagination } from "flowbite-react";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  // Get the current products to display based on currentPage
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(product.length / productsPerPage); // Calculate total pages

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };
    fetchFunction();
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to the top on page change
  };

  return (
    <div className="container mx-auto py-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      
      {loading ? (
        <div className="text-center text-lg flex justify-center items-center">
          <Button>
            <Spinner aria-label="Spinner button example" size="lg" />
            <span className="pl-3 pt-1">Loading...</span>
          </Button>
        </div>
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
                    <span className="text-gray-600">{item.rating.rate} / 5</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Component */}
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



