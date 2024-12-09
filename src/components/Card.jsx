import { FaRegStar } from "react-icons/fa";
import CustomButton from "../components/Buttons";

const CustomCard = ({ image, title, price,description, showDescription=false, rating, onAddToCart, onViewProduct, showRating = true, viewButton=false }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-contain" />
      <div className="p-5 text-center">
        <h3 className="text-md lg:text-lg xl:text-lg font-bold mb-2">{title}</h3>
        
        {showDescription &&  (<p className="mb-5 mt-3 text-md font-bold px-8">{description}</p>)}
        <p className="text-gray-700 mb-3">${price}</p>
        {showRating && (
          <div className="flex justify-center items-center mb-3">
            <FaRegStar className="text-amber-400 mr-2 text-lg" />
            <span className="text-gray-600">{rating} / 5</span>
          </div>
        )}
        <div className="flex justify-center items-center">
          
            <>
              
              {viewButton && (
              <CustomButton Text={"View Product"} onClick={onViewProduct} className="bg-emerald-600 mr-2" />
             

          )}
          <CustomButton Text={"Add to Cart"} onClick={onAddToCart} className="bg-blue-500" />
          
          </>
        </div>
        
      </div>
    </div>
  );
};

export default CustomCard;
