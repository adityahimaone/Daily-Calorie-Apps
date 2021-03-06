import React, { useEffect, useState } from "react";
import Layout from "@/layouts/UserLayout";
import useGetAllHistories from "@/hooks/user/useGetAllHistories";
import Button from "@/components/Button";
import { useRouter } from "next/router";

export default function histories() {
  const router = useRouter();

  const { data, error } = useGetAllHistories();

  const [histories, setHistories] = useState(data?.data?.slice(0, 5));
  const [start, setStart] = useState(10);

  useEffect(() => {
    if (data?.data) {
      setHistories(data.data.slice(0, 5));
    }
  }, [data?.data]);

  const limitHistories = () => {
    setHistories(data?.data.slice(0, start));
    setStart(start + 5);
  };

  const historiesLength = histories?.length;
  const dataLength = data?.data?.length;

  return (
    <Layout pageTitle="Histories">
      <div>
        <div>
          <h1 className="text-2xl font-bold">Histories</h1>
        </div>
        <div className="mt-4 mb-8">
          <div className=" space-y-4">
            {histories?.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="w-full bg-bluewhite rounded-lg shadow-lg flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between py-3 px-4 space-y-2"
                >
                  <div className="flex items-center justify-center sm:w-10 h-10 mr-4 w-full rounded shadow-2xl bg-mainpurple-100">
                    <p className="text-white">
                      {item?.fullname?.slice(0, 2).toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p>{item?.date}</p>
                  </div>
                  <div>
                    <p>{item?.total_calories} Kcal</p>
                  </div>
                  <div>
                    <p>{item?.water * 0.25} L</p>
                  </div>
                  <div>
                    <p>{item?.total_food} Food Total</p>
                  </div>
                  <div>
                    <Button
                      className="btn-orange px-4 w-full"
                      onClick={() => {
                        router.push(`/user/histories/${item.id}`);
                      }}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              );
            })}
            <div
              className={`flex justify-center mt-4 ${
                historiesLength === dataLength && "hidden"
              } `}
            >
              <Button onClick={limitHistories}>Load More</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
