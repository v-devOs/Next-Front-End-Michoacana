"use server";

interface Params {
  action: string;
  id: number;
  endpoint: string;
}

export const executeAction = async ({ action, endpoint, id }: Params) => {
  switch (action) {
    case "modify":
      break;

    default:
      const data = await getDataByid(id, endpoint);
      return data;
  }
};

const getDataByid = async (id: number, endpoint: string) => {
  const url = `http://localhost:8080/${endpoint}/${id}`;

  const res = await fetch(url, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};
