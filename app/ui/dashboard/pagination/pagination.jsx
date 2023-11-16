"use client";

import styles from "./pagination.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ count }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    if (type === "prev") {
      params.set("page", parseInt(page) - 1);
    } else {
      params.set("page", parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}>
        <MdArrowBackIosNew />
        Back
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}>
        Next
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination;
