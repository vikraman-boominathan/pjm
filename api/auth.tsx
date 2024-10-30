
import { LoginRequest } from "@/types/auth.d";
import instance from "./instance";

export async function login(params: LoginRequest) {
  try{
    const res = await instance.post('/api/login',params)
    const token = res.data.token
    localStorage.setItem('token', token)
    return res
  }catch(err){
    console.log(err)
  }
}