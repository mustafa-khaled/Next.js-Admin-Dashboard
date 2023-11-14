"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./MenuLink.module.css";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
