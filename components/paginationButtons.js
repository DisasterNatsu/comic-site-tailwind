"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const PaginationButtons = ({ pages, setCurrentPage, currentPage }) => {
  let pageNumbers = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > pages) break;
    pageNumbers.push(i);
  }

  // On Page Change Scroll to top

  const isBrowser = () => typeof window !== "undefined"; // Checking if window is defined

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center gap-8 pagination-container text-xl font-semibold">
      {/* Back to first page */}

      {currentPage - 1 >= 1 && (
        <button
          onClick={() => {
            setCurrentPage(1);
            scrollToTop();
          }}
        >
          <FaArrowAltCircleLeft />
        </button>
      )}

      {/* The page numbers */}

      {pageNumbers.map((pageNum) => {
        return (
          <button
            key={pageNum}
            onClick={() => {
              setCurrentPage(pageNum);
              scrollToTop();
            }}
            className={
              pageNum === currentPage ? "text-red-600 dark:text-yellow-400" : ""
            }
          >
            {pageNum}
          </button>
        );
      })}

      {/* To the last page */}

      {currentPage + 1 <= pages && (
        <button
          onClick={() => {
            setCurrentPage(pages);
            scrollToTop();
          }}
        >
          <FaArrowAltCircleRight />
        </button>
      )}
    </div>
  );
};

export default PaginationButtons;
