import { useContext } from "react";
import { Table } from "flowbite-react";
import CustomButton from "../components/Buttons";
import { FormContext } from "../context/formContext"; // Import the context

export function FormTable() {
  const { formDataList, deleteFormData } = useContext(FormContext); // Access context
  const commonsxObj={
    wordWrap: "break-word", // Allow text to wrap to the next line
    whiteSpace: "normal",   // Ensure long text doesn't stay on one line
  }
  const theadData = ["Name", "Email", "Feedback"];

  return (
    <div className="overflow-x-auto mt-10">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-8">Person Details</h1>
        {formDataList.length === 0 ? (
        <p className="text-center text-lg mb-10">No Details Found</p>
      ):(
      <Table striped className="right-0">
        <Table.Head>
          {theadData.map((item) => (
            <Table.HeadCell key={item}>{item}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className="sr-only">Delete</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {formDataList.map((data, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs sm:text-base">
                {data.name}
              </Table.Cell>
              <Table.Cell style={commonsxObj} className="max-w-[10rem] sm:max-w-[11rem] md:max-w-[10rem] text-xs sm:text-base">{data.email}</Table.Cell>
              <Table.Cell style={commonsxObj} className="max-w-[10rem] sm:max-w-[10rem] md:max-w-[10rem] text-xs sm:text-base">{data.feedback}</Table.Cell>
              <Table.Cell>
                <CustomButton
                  className="font-medium text-white hover:underline"
                  Text="Delete"
                  onClick={() => deleteFormData(index)} // Delete data on click
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>)}
    </div>
  );
}

export default FormTable;
