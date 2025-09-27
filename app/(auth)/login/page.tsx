import { headers } from "next/headers";
import { auth } from "../../../lib/auth";
import { LoginForm } from "./_components/LoginForm";
import { redirect } from "next/navigation";



export default async function loginPage() {

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect("/");
  }

  return <LoginForm />
}
