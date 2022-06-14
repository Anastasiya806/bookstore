import { useFormik } from "formik";
import { signInSchema } from "../registration/validation";
import "./signIn.css";

const SignIn = () => {
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
    <form className="signIn-wrapper" onSubmit={formik.handleSubmit}>
      <div className="signIn-email">
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
      <div className="signIn-password">
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
      <p className="signIn-text">Forgot password ?</p>
      <button className="signIn-button" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
