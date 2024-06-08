import axios from "axios";
import { store } from "../app/store";

export const getTokenFromRedux = () => {
  const user = store.getState().user.userInfo;
  return user.accessToken;
};

export const postWithAuth = async (url, body) => {
  const token = getTokenFromRedux();

  return await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const postWithoutAuth = async (url, body) => {
  return await axios.post(url, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export const putWithAuth = async (url, body) => {
  const token = getTokenFromRedux();

  return await axios.put(url, body, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const getWithAuth = async (url, params = {}) => {
  const token = getTokenFromRedux();

  return await axios.get(url, {
    params,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};

export const getWithoutAuth = async (url, params = {}) => {
  return await axios.get(url, params);
};
export const deleteWithAuth = async (url) => {
  const token = getTokenFromRedux();

  return await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};