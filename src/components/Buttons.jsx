import { Button } from "flowbite-react";

const CustomButton = ({ onClick, className, Text }) => {
  return (
    <Button className={className} onClick={onClick}>
      {Text}
    </Button>
  );
};

export default CustomButton;
