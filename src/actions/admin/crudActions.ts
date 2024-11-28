"use server";
import axios from "axios";

export const getDataByid = async (endpoint: string, id: string) => {
  const urlBackend = process.env.NESTJS_BACKEND;

  if (!urlBackend) throw new Error("Error on construct url backend");
  const urlApi = `${urlBackend}/${endpoint}/${id}`;

  const res = await fetch(urlApi, {
    cache: "no-cache",
  });

  if (!res.ok) throw new Error("Not found data");

  return res.json();
};

export const createData = async <T>(data: T, endpoint: string, id: string) => {
  const urlBackend = process.env.NESTJS_BACKEND;

  if (!urlBackend) throw new Error("Error on construct url backend");
  const urlApi = `${urlBackend}/${endpoint}/${id}`;

  try {
    const response = await axios.post<T>(urlApi, data);
    return response.data;
  } catch (error) {
    throw new Error("Error en el posteo" + error);
  }
};

export const updateData = async <T>(data: T, endpoint: string, id: string) => {
  const urlBackend = process.env.NESTJS_BACKEND;

  if (!urlBackend) throw new Error("Error on construct url backend");
  const urlApi = `${urlBackend}/${endpoint}/${id}`;

  try {
    const response = await axios.patch<T>(urlApi, data);
    return response.data;
  } catch (error) {
    throw new Error("Error en la actualización" + error);
  }
};

export const deleteData = async (endpoint: string, id: string) => {
  const urlBackend = process.env.NESTJS_BACKEND;

  if (!urlBackend) throw new Error("Error on construct url backend");
  const urlApi = `${urlBackend}/${endpoint}/${id}`;

  try {
    const response = await axios.delete(urlApi);
    return response.data;
  } catch (error) {
    throw new Error("Error en la actualización" + error);
  }
};
