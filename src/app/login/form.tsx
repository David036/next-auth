"use client";

import React, { FormEvent } from "react";
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response: SignInResponse | undefined = signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
      <Link href="/register">Sign up</Link>
    </form>
  );
}
