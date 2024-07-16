import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const categorySchema = Yup.object().shape({
  categoryName: Yup.string()
    .required("Category name is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
});

function AddCategory() {
  return (
    <div>
      <h1>Add Category</h1>
      <Formik
        initialValues={{ categoryName: "" }}
        validationSchema={categorySchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form>
            <Field name="categoryName" type="text" />
            <ErrorMessage name="categoryName" component="div" />
            <button type="submit" disabled={formik.isSubmitting}>
              Add Category
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddCategory;
