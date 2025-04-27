import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Game from "./GameModal";

function Sidebar() {
  const [activityPage, setActivityPage] = useState(1);
  const menuItems = [
    { label: "Cognitive Games", href: "#" },
    { label: "Support", href: "#" },
    { label: "About", href: "#" },
    { label: "Logout", href: "#" },
  ];

  return (
    <div className="w-[20%] h-svh">
      {/* Sidebar */}
      <ul
        className={` bg-[var(--secondary)] text-[var(--fifth)] h-full transition-all duration-1000`}
      >
        <li className="h-[65px] text-lg leading-[60px] pl-6 pt-[82px] pb-[130px]">
          <a href="#" className="flex items-center">
            <FaArrowLeft className="w-[30px] h-[30px]" />
            <h1 className="ml-4 text-[32px] font-extrabold ">
              Bright{" "}
              <em className="not-italic text-[var(--quartery)] ">Path</em>
            </h1>
          </a>
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="group pl-9 leading-[4.75] transition-all  text-[var(--fifth)] duration-300 hover:bg-[var(--primary)] hover:text-[#000] hover:pl-11 hover:cursor-pointer"
          >
            <a
              href={item.href}
              className="font-bold group-hover:font-extrabold"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
