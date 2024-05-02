"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Logout() {
  return (
    <Link
      href="#"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Link>
  );
}
