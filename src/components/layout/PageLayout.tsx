import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  /** Hide site footer (e.g. some auth flows). Default: show. */
  showFooter?: boolean;
  /** Hide site header. Default: show. */
  showHeader?: boolean;
}

/**
 * Site shell with shared header/footer.
 * Page content width is controlled by PageContainer inside sections —
 * hero sections should stay full-bleed outside PageContainer.
 */
const PageLayout = ({
  children,
  showFooter = true,
  showHeader = true,
}: PageLayoutProps) => {
  return (
    <div className="min-w-0 overflow-x-hidden">
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
