"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import navigationMenu from "../../constant/navigationMenu.json";

function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex">
      <ul className="flex flex-row gap-4">
        {navigationMenu.mainMenu.map((item, index) => (
          <li className="group" key={index}>
            <Link
              href={item.link}
              className={`px-2 py-2 border-b-2 transition-colors group-hover:border-yellow-400 group-hover:text-yellow-400 ${
                pathname === item.link
                  ? "text-yellow-400 border-yellow-400"
                  : "border-transparent text-white"
              }`}
            >
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
