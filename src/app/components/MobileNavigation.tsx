"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import navigationMenu from "../../constant/navigationMenu.json";

function MobileNavigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col p-4 w-full">
      <ul className="flex flex-col gap-4 w-full">
        {navigationMenu.mainMenu.map((item, index) => (
          <li key={index} className="w-full">
            <Link
              href={item.link}
              className={`block px-2 py-2 border-b-2 transition-colors ${
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

export default MobileNavigation;
