export interface LoginRequest{
  email: string,
  password: string
}

export interface LoginResponse{
  token:string,
  user: {
    id : string,
    name: string,
    email: string
  }
}