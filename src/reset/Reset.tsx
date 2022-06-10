import { useFormik } from "formik";
import { resetSchema } from "../registration/validation";
import "./reset.css";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: resetSchema,
    validateOnChange: false, validateOnBlur: false,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="paset-wrapper" onSubmit={formik.handleSubmit}>
      <div className="pased-title">
        <p>Reset password</p>
      </div>
      <div className="reset-email">
        <p>Email</p>
        <input
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Your email"
        />
        {formik.errors.email && (
          <p className="common-error__text">{formik.errors.email}</p>
        )}
      </div>
      <button className="reset-button" type="submit">
        Reset
      </button>
    </form>
  );
};

export default Reset;
