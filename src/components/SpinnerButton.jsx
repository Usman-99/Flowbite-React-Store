import {  Spinner,Button } from "flowbite-react";  

const SpinnerButton = ({SpinnerSize, Text, TextClass}) => {
  return (<div className="text-center text-lg flex justify-center items-center">
    <Button>
            <Spinner  size={SpinnerSize} />
            <span className={TextClass}>{Text}</span>
          </Button></div>
  )
}
export default SpinnerButton
