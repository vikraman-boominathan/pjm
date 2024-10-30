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

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { login } from "@/api/auth";
import { LoginRequest } from "@/types/auth.d";

export default function () {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginParams: LoginRequest = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    try {
      const data = await login(loginParams);
      console.log(data?.status);

      if (data?.status === 200) {
        setAuthenticated(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (authenticated) {
      router.push("/dashboard");
    }
  }, [authenticated, router]);

  return (
    <form onSubmit={handleLogin}>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Please enter your email and password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              ref={emailRef}
              id="email"
              type="text"
              placeholder="Email"
              required
            />
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
}
