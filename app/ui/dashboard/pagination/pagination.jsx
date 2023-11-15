import styles from "./pagination.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <MdArrowBackIosNew />
        Back
      </button>
      <button className={styles.button}>
        Next
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination;
