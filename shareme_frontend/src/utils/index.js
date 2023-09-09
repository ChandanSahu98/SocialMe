import jwt_decode from "jwt-decode";

export const createOrGetUser = async (response) => {
  const decode = await jwt_decode(response.credential);
  return decode;
};
