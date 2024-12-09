import { Button } from "flowbite-react";

const CustomButton = ({ onClick, className, Text ,Type ,Key}) => {
  return (
    <Button className={className} onClick={onClick} type={Type} >
      {Text}
    </Button>
  );
};

export default CustomButton;
