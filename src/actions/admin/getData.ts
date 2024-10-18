"use server";

export const getAllData = async (endpoint: string) => {
  const url = `http://localhost:8080/${endpoint}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};
