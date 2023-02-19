import { GetUserType } from "@/Models/User";
import axios from "axios";
import React from "react";
import useSWR from "swr";

export default function Swr() {
  const api = "/api/swr";

  // how to handle exception
  const fetcher = (url: string) =>
    axios.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error("Unknown Error");
        error.message = res.data;
        throw error;
      }
      return res.data;
    });

  const { data, error, isLoading } = useSWR<Array<GetUserType>>(api, fetcher);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error </h1>;

  return (
    <>
      <div className="container p-3">
        <h1 className=" font-bold text-xl mb-2">Using SWR</h1>
        <div className="border borde-black px-4 py-2">
          <ul className="flex flex-col gap-[1rem]">
            {data
              ? data.map((user, idx) => {
                  return (
                    <li className="" key={idx}>
                      {user.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}
