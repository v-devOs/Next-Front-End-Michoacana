"use server";

export const getAllData = async (endpoint: string) => {
  const url = `${
    process.env.NESTJS_BACKEND || "http://localhost:8080"
  }/${endpoint}`;

  const res = await fetch(url, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};
