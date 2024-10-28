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




export default function () {

  

  return (
    <form >
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
              id="email"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              
              required
            />
          </div>
          <Button type="submit" className="w-full" >
          <a
             href="/dashboard" 
            >
              Login
            </a>
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}