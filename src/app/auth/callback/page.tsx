import { redirect } from "next/navigation";

export default function CallbackPage() {
  redirect("/auth/login");
  return null;
}
