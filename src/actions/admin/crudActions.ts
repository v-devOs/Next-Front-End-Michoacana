"use server";

export const getDataByid = async (endpoint: string, id: string) => {
  const url_api = `http://localhost:8080/${endpoint}/${id}`;

  const res = await fetch(url_api, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};
