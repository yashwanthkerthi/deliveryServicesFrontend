import * as yup from "yup";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
const pincodeRegex = /^\d{6}$/;

export const LoginFormValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, "*Please enter a valid email")
    .required("*Please enter a valid email"),
  password: yup
    .string()
    .matches(passwordRegex, "*Please enter a valid password")
    .required("*Please enter your password"),
});

export const signUpFormValidation = yup.object().shape({
  email: yup
    .string()
    .matches(emailRegex, "*Please enter a valid email")
    .required("*Please enter a valid email"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "*Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("*Please enter your password"),
  firstName: yup.string().required("*Please enter first name"),
  lastName: yup.string().required("*Please enter last name"),
  mobileNumber: yup.number().required("*Please enter mobile number"),
});

export const addressFormValidation = yup.object().shape({
  fromAddress: yup.string().required("*Please enter from address"),
  fromEmail: yup.string().required("*Please enter from email"),
  fromName: yup.string().required("*Please enter from name"),
  fromPhoneNumber: yup.string().required("*Please enter from phone number"),
  fromPincode: yup
    .string()
    .matches(pincodeRegex, "*Pincode should consists of 6 digits")
    .required("*Please enter from pincode"),
  toAddress: yup.string().required("*Please enter to address"),
  toEmail: yup.string().required("*Please enter to email"),
  toName: yup.string().required("*Please enter to name"),
  toPhoneNumber: yup.string().required("*Please enter to phone number"),
  toPincode: yup
    .string()
    .matches(pincodeRegex, "*Pincode should consists of 6 digits")
    .required("*Please enter to pincode"),
});

export const trackShipmentValidation = yup.object().shape({
  trackingId: yup.number().required("*Please enter a valid tracking ID"),
});

export const boxDetailsFormValidation = yup.object().shape({
  weight: yup.number().required("*Please enter weight"),
  content: yup.string().required("*Please enter content name"),
  measurement: yup.string().required("*Please enter measurement"),
  sender_name: yup.string().required("*Please enter sender name"),
  recipient_name: yup.string().required("*Please enter recipient name"),
});

export const pickupDetailsFormValidation = yup.object().shape({
  date: yup.date().required("*Please enter date"),
  time: yup.string().required("*Please enter time"),
  location: yup.string().required("*Please enter location"),
});

export const updateStatusValidation = yup.object().shape({
  trackingId: yup.number().required("*Please enter tracking id"),
  status: yup.string().required("*Please enter status"),
});
