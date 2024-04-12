import React, { useState } from "react";
import { addressFormValidation } from "../../utils/helpers/validations/Validations";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import TextField from "../../components/TextField/TextField";
import ReusableButton from "../../components/Button/Button";
import ReusableDropdown from "../../components/Dropdown/Dropdown";

const planOptions = [
  { key: "Premium", value: "PREMIUM" },
  { key: "Normal", value: "NORMAL" },
];

const PlanSelectionForm = () => {
  const [isLogged, setIsLogged] = useState(false);

  const formik = useFormik({
    initialValues: {
      planId: "",
      planName: "",
    },
    validationSchema: addressFormValidation,
    onSubmit: () => {
      handleLoginDetails();
    },
  });

  const handleLoginDetails = async () => {
    // const { firstName, lastName, email, password, mobileNumber } =
    //   formik.values;
    try {
      //   const response = await Post(
      //     networkUrls.signup,
      //     {
      //       first_name: firstName,
      //       last_name: lastName,
      //       email,
      //       password,
      //       mobile: mobileNumber,
      //       fcm_token: "dummy",
      //       device_id: "1",
      //       device_type: "andriod",
      //       status: true,
      //     },
      //     false
      //   );
      //   if (response?.data?.statusCode === 200) {
      //     toast.success("Signup successful", { autoClose: 3000 });
      //     Cookies.set("refreshToken", response.data.data.refreshToken);
      //     Cookies.set("acessToken", response.data.data.acessToken);
      //     localStorage.setItem(
      //       "userDetails",
      //       JSON.stringify(response?.data?.data)
      //     );
      //     // navigate("/");
      //   } else toast.error(response?.data?.message, { autoClose: 3000 });
    } catch (error) {
      toast.error("Please try again!", { autoClose: 3000 });
      setIsLogged(false);
    }
  };
  return (
    <div
      style={{
        paddingTop: "20vh",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: "25%",
        alignItems: "center",
      }}
    >
      {/* <h1>Address Form</h1> */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Select plan
            </h1>
            {/* <TextField
              id="fromAddress"
              name="fromAddress"
              placeholder="Enter Address"
              label="FromAddress"
              onChange={formik.handleChange}
              type="text"
              style={{
                marginBottom: "0.75rem",
                width: "100%",
              }}
              value={formik.values.fromAddress}
              error={Boolean(formik.errors.fromAddress)}
              errorMessage={
                formik.touched.fromAddress && formik.errors.fromAddress
              }
              autoComplete="off"
              TextFieldVariants="filled"
            /> */}

            <label style={{ marginTop: "10px" }}>Select Plan</label>
            <ReusableDropdown
              options={planOptions}
              placeholder="Select.."
              id="planName"
              name="planName"
              className="w-full"
              style={{ height: 50, marginBottom: "20px" }}
              onChange={formik.handleChange}
              value={formik.values.planName}
              error={formik.touched.planName && Boolean(formik.errors.planName)}
              helperText={formik.touched.planName && formik.errors.planName}
            />
          </div>
        </div>
        <ReusableButton
          size="medium"
          disabled={isLogged}
          style={{ width: "100%", backgroundColor: "#0E2C53" }}
          className="w-full mt-9 bg-customBlue text-white rounded-md py-2 font-semibold hover:bg-customHoverBlue "
          variant="contained"
          type="submit"
          buttonName="Next"
        />
      </form>
      {<ToastContainer />}
    </div>
  );
};

export default PlanSelectionForm;
