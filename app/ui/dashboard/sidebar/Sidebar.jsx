import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          alt="User Image"
          width="50"
          height="50"
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Mustafa Khaled</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems?.map((c) => {
          return (
            <li key={c.title}>
              <span className={styles.cat}>{c.title}</span>
              {c?.list.map((i) => {
                return <MenuLink key={i.title} item={i} />;
              })}
            </li>
          );
        })}
      </ul>
      <button className={styles.logout}>
        <MdLogout /> Logout
      </button>
    </div>
  );
}

export default Sidebar;
