import type { ReactNode } from "react";

/** Shared content width used site-wide (header, footer, body sections). */
export const pageWidthClass =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

/** Full-bleed hero inner width — edge-to-edge with side padding only. */
export const heroWidthClass = "mx-auto w-full px-4 sm:px-6 lg:px-8";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
  /** Use full viewport width (heroes). Default is constrained page width. */
  fullWidth?: boolean;
}

const PageContainer = ({
  children,
  className = "",
  as: Tag = "div",
  fullWidth = false,
}: PageContainerProps) => {
  const widthClass = fullWidth ? heroWidthClass : pageWidthClass;

  return (
    <Tag className={`${widthClass}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
};

export default PageContainer;
