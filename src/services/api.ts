import axios from "axios";
export const getAllUser = async () => {
  const api = "/api/swr";
  try {
    const res = await axios.get(api);
    return res.data;
  } catch (e) {
    throw new Error("UnkownError");
  }
};

export const getUser = () => {};

const users = { getAllUser, getUser };

export default users;
