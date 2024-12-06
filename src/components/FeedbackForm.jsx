import { Label, TextInput, Checkbox } from "flowbite-react";
import { useState } from "react";
import CustomButton from "./Buttons"; // Adjust the path according to your project structure

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg w-full mx-auto lg:w-[600px] lg:ml-auto">
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8">Give Feedback</h1>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput
          id="name"
          type="text"
          placeholder="Name"
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          value={formData.email}
          type="email"
          name="email"
          placeholder="name@reactstore.com"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="feedback" value="Give your Feedback" />
        </div>
        <TextInput
          name="feedback"
          value={formData.feedback}
          id="feedback"
          type="text"
          sizing="lg"
          required
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      
      <CustomButton Text="Submit" Type="submit" />
    </form>
  );
};

export default FeedbackForm;
