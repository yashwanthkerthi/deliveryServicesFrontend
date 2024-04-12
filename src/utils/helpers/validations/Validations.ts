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
  fromAddress: yup.string().required("Please enter from address"),
  fromEmail: yup.string().required("Please enter fromemail"),
  fromName: yup.string().required("Please enter fromname"),
  fromPhoneNumber: yup.string().required("Please enter fromhone number"),
  fromPincode: yup.string().required("Please enter frompincode"),
  toAddress: yup.string().required("Please enter toaddress"),
  toEmail: yup.string().required("Please enter toemail"),
  toName: yup.string().required("Please enter toname"),
  toPhoneNumber: yup.string().required("Please enter tophonenumber"),
  toPincode: yup.string().required("Please enter topincode"),
});

export const trackShipmentValidation = yup.object().shape({
  trackingId: yup.number().required("Please enter a valid tracking ID"),
});

export const boxDetailsFormValidation = yup.object().shape({
  weight: yup.string().required("Please enter weight"),
  content: yup.string().required("Please enter content name"),
  measurement: yup.string().required("Please enter measurement"),
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

