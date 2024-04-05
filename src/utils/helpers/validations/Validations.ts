import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
    email: yup
      .string()
      .required("Please enter a valid email"),
    password: yup
      .string()
      .required("Please enter your password"),
  });
export const signUpFormValidation = yup.object().shape({
    email: yup
      .string()
      .required("Please enter a valid email"),
    password: yup
      .string()
      .required("Please enter your password"),
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string().required("Please enter last name"),
    mobileNumber: yup.number().required("Please enter mobile number"),
  });