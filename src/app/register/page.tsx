import Form from "./form";

import styles from "./register.module.scss";

export default async function RegisterPage() {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
}
