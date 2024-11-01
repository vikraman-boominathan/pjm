import { makeAutoObservable, runInAction } from "mobx";
import { LoginRequest } from "@/types/auth.d";
import { login } from "@/api/auth";

class AuthStore {
  authenticated = false;
  token: string | null = null;
  errorMessage = "";

  constructor() {
    makeAutoObservable(this);
  }

  async login(params: LoginRequest) {
    try {
      const res = await login(params);

      const token = res.data?.token;

      if (res?.status == 200 && token) {
        runInAction(() => {
          this.token = token;
          this.authenticated = true;
          this.errorMessage = "";
        });
      } else {
        runInAction(() => {
          this.errorMessage = "Login failed. Please check your credentials.";
          this.authenticated = false;
        });
      }
    } catch (err) {
      runInAction(() => {
        this.errorMessage = "An error occurred during login.";
        this.authenticated = false;
      });
    }
  }

  logout() {
    this.token = null;
    this.authenticated = false;
    this.errorMessage = "";
  }
}

const authStore = new AuthStore();
export default authStore;
