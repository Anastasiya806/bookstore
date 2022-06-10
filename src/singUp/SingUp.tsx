import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../registration/validation";
import "./singUp.css";

const SingUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      localStorage.setItem("userData", JSON.stringify(values));
      localStorage.setItem("isLogged", "true");
      navigate("/");
      resetForm();
    },
  });

  return (
    <form className="singUp-wrapper" onSubmit={formik.handleSubmit}>
      <div className="singUp-profile">
        <p>Name</p>
        <input
          id="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Your name"
        />
        {formik.errors.name && (
          <p className="common-error__text">{formik.errors.name}</p>
        )}
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
        <p>Confirm new password</p>
        <input
          id="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Confirm your password"
        />
        {formik.errors.confirmPassword && (
          <p className="common-error__text">{formik.errors.confirmPassword}</p>
        )}
      </div>
      <button className="singUp-button" type="submit">
        Sing up
      </button>
    </form>
  );
};

export default SingUp;
