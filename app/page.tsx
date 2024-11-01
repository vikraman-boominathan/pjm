"use client";

import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import authStore from "./stores/AuthStore";
import { LoginRequest } from "@/types/auth.d";

const Login = observer(() => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginParams: LoginRequest = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    await authStore.login(loginParams);

    if (authStore.authenticated) {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Please enter your email and password.
          </CardDescription>
          {authStore.errorMessage && (
            <CardDescription className="text-red-500">
              {authStore.errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input ref={emailRef} id="email" type="text" placeholder="Email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardContent>
      </Card>
    </form>
  );
});

export default Login;
