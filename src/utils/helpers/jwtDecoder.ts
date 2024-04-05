import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { getJwt } from "./getJwt";
import { networkUrls } from "../../services/networkUrls";
import { BaseURL } from "../../services/apiServices";

const jwtDecoder = async () => {
  const token: any = getJwt();
  const decoded: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    const userDetailsString: any = localStorage.getItem("userDetails");
    const userDetails = JSON.parse(userDetailsString);
    try {
      const response = await fetch(BaseURL + networkUrls.getToken, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: Cookies.get("refreshToken"),
          id: userDetails?.id,
        }),
      });
      const json = await response.json();
      Cookies.set("accessToken", json?.data?.access_token);
      return json?.data?.access_token;
    } catch (error) {
      console.log(error);
    }
  }
  return token;
};
export default jwtDecoder;
