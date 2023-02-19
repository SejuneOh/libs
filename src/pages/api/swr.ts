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
  res: NextApiResponse<Array<GetUserType>>
) {
  res.status(200).json(resData);
}
