import { LoginRequest } from "@/types/auth.d";
import instance from "./instance";

export async function login(params: LoginRequest) {
  try {
    const res = await instance.post('/api/login', params);

    if (res.status === 200) {
      return res;
    } else {
      throw new Error(res.data.message || 'Login failed');
    }
  } catch (err) {
    console.error("Login error:", err);
    throw err; 
  }
}
