"use server";

export const getAllData = async (endpoint: string) => {
  const urlBackend = process.env.NESTJS_BACKEND;

  if (!urlBackend) throw new Error("Error on create url backend");
  const url = `${urlBackend}/${endpoint}`;

  const res = await fetch(url, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};
