"use client";

import loginAction from "@/actions/loginAction";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, null);
  const router = useRouter();

  if (state?.success) {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={formAction}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>
            <Button className="w-full">Login</Button>
            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
          {state?.error && <p className="text-red-500">{state.error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
