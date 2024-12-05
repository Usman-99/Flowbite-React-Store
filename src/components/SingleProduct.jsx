import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To extract product ID from URL
import { Spinner, Button } from "flowbite-react";
import { useCart } from "../context/cartContext";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg flex justify-center items-center py-20">
        <Button>
          <Spinner aria-label="Spinner button example" size="lg" />
          <span className="pl-3 pt-1">Loading...</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 mt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-[309px] lg:h-[300px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-5">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-3">${product.price}</p>
          <p className="mb-5">{product.description}</p>

          <div className="flex items-center mb-5">
            <p className="text-gray-700 text-lg mr-3">
              Rating: {product.rating.rate} / 5
            </p>
            <p className="text-gray-500">({product.rating.count} reviews)</p>
          </div>

          <Button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
