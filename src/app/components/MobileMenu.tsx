"use client";

import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";

function MobileMenu() {
  const [open, cycleOpen] = useCycle(false, true);
  const pathname = usePathname();
  React.useEffect(() => {
    if (open) {
      cycleOpen();
    }
  }, [pathname]);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => cycleOpen()}>
        <svg
          className="w-8 h-8 transition-colors text-white hover:text-yellow-400"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "30vh" }}
            exit={{
              height: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            className="fixed top-28 left-0 z-50 w-full bg-gray-800/25 backdrop-filter backdrop-blur-sm"
          >
            <motion.div
              className="w-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.div
                className="text-xl text-white w-full h-64"
                variants={itemVariants}
              >
                <MobileNavigation />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
