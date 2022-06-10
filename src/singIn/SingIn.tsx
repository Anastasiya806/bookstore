import { useFormik } from "formik";
import { signInSchema } from "../registration/validation";

import "./singIn.css";

const SingIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      localStorage.setItem("userData", JSON.stringify(values));
      resetForm();
    },
  });

  return (
    <form className="singIn-wrapper" onSubmit={formik.handleSubmit}>
      <div className="singIn-email">
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
      <div className="singIn-password">
        <p>Password</p>
        <input
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="Your password"
        />
        {formik.errors.password && (
          <p className="common-error__text">{formik.errors.password}</p>
        )}
      </div>
      <p className="singIn-text">Forgot password ?</p>
      <button className="singIn-button" type="submit">
        Sing in
      </button>
    </form>
  );
};

export default SingIn;
