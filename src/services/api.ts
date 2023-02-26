import { RestException } from "./../Models/exceptions";
import { GetUserType } from "@/Models/User";
import axios from "axios";

export const getAllUser = async (): Promise<Array<GetUserType>> => {
  try {
    const res = await axios.get("/api/swr");
    return res.data as Array<GetUserType>;
  } catch (error: any) {
    const restException = error as RestException;
    throw restException;
  }
};

const services = { getAllUser };

export default services;
