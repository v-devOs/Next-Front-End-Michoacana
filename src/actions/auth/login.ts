"use server";
import axios from "axios";
import { User } from "@/interfaces/general";

export const login = async (email: string, password: string) => {
  const urlApi = `${process.env.NESTJS_BACKEND}/auth`;
  const response = await axios.post<User>(urlApi, { email, password });

  if (response) return response.data;
  else throw new Error("Error al realizar logeo");
};

// export const validateToke = async (token: string) => {};
