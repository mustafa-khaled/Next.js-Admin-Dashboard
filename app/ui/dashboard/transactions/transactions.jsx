import Image from "next/image";
import styles from "./transactions.module.css";

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Home</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Mustafa Khaled
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>14/02.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Ahmed Samy
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14/02.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Asmaa Ibrahim
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>14/02.2024</td>
            <td>$3.50</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Mohammed Nabil
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>14/02.2024</td>
            <td>$3.50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
