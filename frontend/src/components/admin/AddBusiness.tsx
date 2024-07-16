import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const businessSchema = Yup.object().shape({
  businessName: Yup.string()
    .required("Business name is required")
    .min(2, "Too Short!")
    .max(100, "Too Long!"),
  address: Yup.string().required("Address is required"),
});

function AddBusiness() {
  return (
    <div>
      <h1>Add Business</h1>
      <Formik
        initialValues={{ businessName: "", address: "" }}
        validationSchema={businessSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <Field name="businessName" type="text" />
            <ErrorMessage name="businessName" component="div" />
            <Field name="address" type="text" />
            <ErrorMessage name="address" component="div" />
            <button type="submit" disabled={formik.isSubmitting}>
              Add Business
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddBusiness;
