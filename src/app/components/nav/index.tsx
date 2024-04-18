import React from "react";
import Link from "next/link";

import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">Authentication</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}
