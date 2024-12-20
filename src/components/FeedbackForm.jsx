import { Label, TextInput, Checkbox } from "flowbite-react";
import CustomButton from "./Buttons";
import { useAppContext } from "../context/commonContext";
import { useFormik } from "formik";
import * as Yup from "yup";
const ErrorComponent = ({ Text }) => (
  <p style={{color:"red",fontSize:"0.875rem"}}>
    {Text}
  </p>
);

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "name must have atleast 2 characters")
    .required("name field cannot be empty"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email field cannot be empty"),
  feedback: Yup.string()
    .min(20, "Feedback must contain atleast 20 characters")
    .required("Feedback field cannot be empty"),
});
const FeedbackForm = () => {

const formik=useFormik({
  initialValues:{
    name: "",
    email: "",
    feedback: "",
  },validationSchema:validationSchema,onSubmit:((value,{resetForm})=>{handleSubmit(value);resetForm()

  })
})
  const { addFormData } = useAppContext(); // Access context


  const handleSubmit = (value) => {
    addFormData({
      name:value.name,
      email: value.email,
      feedback: value.feedback,
    })
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-4 max-w-lg w-full mx-auto lg:w-[600px] lg:ml-auto"
    >
      <br />
      <br />
      <h1 className="text-4xl font-bold text-center mb-8">Give Feedback</h1>
      <div>
        <Label htmlFor="name" value="Your name" />
        <TextInput
          id="name"
          type="text"
          placeholder="Name"
          required
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (<ErrorComponent Text={formik.errors.name}/>)}
      </div>

      <div>
        <Label htmlFor="email" value="Your email" />
        <TextInput
          id="email"
          value={formik.values.email}
          type="email"
          name="email"
          placeholder="name@reactstore.com"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         {formik.touched.email && formik.errors.email && (<ErrorComponent Text={formik.errors.email}/>)}
      </div>

      <div>
        <Label htmlFor="feedback" value="Give your Feedback" />
        <TextInput
          name="feedback"
          value={formik.values.feedback}
          id="feedback"
          type="text"
          sizing="lg"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         {formik.touched.feedback && formik.errors.feedback && (<ErrorComponent Text={formik.errors.feedback}/>)}
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
