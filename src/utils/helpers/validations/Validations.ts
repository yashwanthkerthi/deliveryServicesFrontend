import * as yup from "yup";

export const LoginFormValidation = yup.object().shape({
  email: yup.string().required("Please enter a valid email"),
  password: yup.string().required("Please enter your password"),
});
export const signUpFormValidation = yup.object().shape({
  email: yup.string().required("Please enter a valid email"),
  password: yup.string().required("Please enter your password"),
  firstName: yup.string().required("Please enter first name"),
  lastName: yup.string().required("Please enter last name"),
  mobileNumber: yup.number().required("Please enter mobile number"),
});

export const addressFormValidation = yup.object().shape({
  fromAddress: yup.string().required("Please enter a valid email"),
  fromEmail: yup.string().required("Please enter your password"),
  fromName: yup.string().required("Please enter first name"),
  fromPhoneNumber: yup.string().required("Please enter last name"),
  fromPincode: yup.number().required("Please enter mobile number"),
  toAddress: yup.string().required("Please enter a valid email"),
  toEmail: yup.string().required("Please enter your password"),
  toName: yup.string().required("Please enter first name"),
  toPhoneNumber: yup.string().required("Please enter last name"),
  toPincode: yup.number().required("Please enter mobile number"),
});

export const trackShipmentValidation = yup.object().shape({
  trackingId: yup.number().required("Please enter a valid tracking ID"),
});

export const boxDetailsFormValidation = yup.object().shape({
  weight: yup.string().required("Please enter weight"),
  content: yup.string().required("Please enter content name"),
  measurement: yup.string().required("Please enter measurement"),
  shipmentPrice: yup.string().required("Please enter shipmentPrice"),
  senderName: yup.string().required("Please enter senderName"),
  recipientName: yup.number().required("Please enter recipientName"),
});

export const pickupDetailsFormValidation = yup.object().shape({
  date: yup.date().required("Please enter weight"),
  time: yup.string().required("Please enter content name"),
  location: yup.string().required("Please enter measurement"),
});

export const updateStatusValidation = yup.object().shape({
  trackingId:yup.number().required("Please enter tracking id"),
  status: yup.string().required("Please enter status"),
});

