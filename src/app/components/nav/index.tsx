import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import Logout from "@/app/logout";

import styles from "./nav.module.scss";

export default async function Nav() {
  const session = await getServerSession();

  return (
    <div className={styles.container}>
      <nav>
        {session && <Logout />}
        {!session && <Link href="/login">Login</Link>}
      </nav>
    </div>
  );
}
