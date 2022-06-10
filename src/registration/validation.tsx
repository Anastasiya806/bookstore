import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(5, "Too short!").required("Required"),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(5, "Too short!").required("Required"),
  confirmPassword: Yup.string().min(5, "Too short!").required("Required"),
});

export const resetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
});