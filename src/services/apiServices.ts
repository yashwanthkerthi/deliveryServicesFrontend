import axios from 'axios';
// import { getJwt } from '../utils/helpers/getJwt';
import jwtDecoder from '../utils/helpers/jwtDecoder';

// export const BaseURL="https://ans-vtg2.onrender.com/api";
export const BaseURL="http://localhost:8000/api";



const getHeaders = async (header?: boolean) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (header) {
    const jwt = await jwtDecoder();
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
    return { response: response.data, status: response.status };
  } catch (error) {
    throw error;
  }
};

const Delete = async (url: string, payload: any, isRequired: boolean) => {
  const headers = await getHeaders(isRequired);
  try {
    const response = await axios.delete(`${BaseURL}${url}`,{headers});
    return response
  } catch (error) {
    throw error;
  }
};

export { Post, Put ,Get ,Delete};
