import { RestException } from "./../../Models/exceptions";
import { getAllUser } from "@/services/api";
import { GetUserType } from "./../../Models/User";
import type { NextApiRequest, NextApiResponse } from "next";

const resData: Array<GetUserType> = [
  {
    email: "test1@email.com",
    name: "user1",
  },
  {
    email: "test2@email.com",
    name: "user2",
  },
];
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<GetUserType> | RestException>
) {
  return new Promise<Array<GetUserType> | RestException>((resolve, reject) => {
    try {
      res.status(200).json(resData);
      resolve(resData);
    } catch (error) {
      const restError = error as RestException;
      res.status(501).json(restError);
      resolve(restError);
    }
  });
}
