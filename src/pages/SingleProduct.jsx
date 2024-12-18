import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import CustomCard from "../components/Card";
import SpinnerButton from "../components/SpinnerButton";

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
      <div className="py-20 mb-[50%] md:mb-[40%] lg:mb-[55%] xl:mb-[45%]">
        <SpinnerButton SpinnerSize="lg" Text={"Loading ..."} TextClass="pl-3 pt-1" />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 mt-20 px-4 mb-10">
      <CustomCard
        image={product.image}
        title={product.title}
        price={product.price}
        rating={product.rating.rate}
        showRating={true}
        onAddToCart={() => addToCart(product)}
        showButton={true}
        showDescription={true}
        description={product.description}
      />
    </div>
  );
};

export default ProductDetail;
