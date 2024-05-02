import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";

import styles from "./login.module.scss";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
}
