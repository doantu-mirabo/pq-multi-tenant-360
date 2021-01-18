import Cookies from "js-cookie";

const TokenKey = "_360pqtenant_jwt";

export function getToken() {
  return Cookies.get(TokenKey, { expires: 1 });
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
