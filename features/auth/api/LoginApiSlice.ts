import z from "zod";
import { loginSchema } from "../utils/loginSchema";
import { instance } from "@/lib/instance";

type LoginFormData = z.infer<typeof loginSchema>;

export async function loginApi(data: LoginFormData) {
  try {
    const response = await instance.post("/auth/login", {
      username: data.username,
      password: data.password,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "An error occurred during login");
  }
}
