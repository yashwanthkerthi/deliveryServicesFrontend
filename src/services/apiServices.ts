import axios from 'axios';
import Cookies from 'js-cookie';
export const BaseURL="https://localhost:6000/api";



const getHeaders = async (header?: boolean) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (header) {
    const jwt = Cookies.get("jwtToken");
    headers.Authorization = `Bearer ${jwt}`;
  }
  return headers;
};

const Get = async (url: string, isRequired: boolean) => {
  const headers = await getHeaders(isRequired);
  try {
    const response = await axios.get(`${BaseURL}${url}`, {headers});
    return  response
  } catch (error) {
    throw error;
  }
};

const Post = async (url: string, payload: any, isRequired: boolean) => {
  const headers = await getHeaders(isRequired);
  try {
    const response = await axios.post(`${BaseURL}${url}`, payload, { headers });
    return response
  } catch (error) {
    throw error;
  }
};

const Put = async (url: string, payload: any, isRequired: boolean) => {
  const headers = await getHeaders(isRequired);
  try {
    const response = await axios.put(`${BaseURL}${url}`, payload, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};


export { Post, Put ,Get };
