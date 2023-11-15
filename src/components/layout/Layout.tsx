import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Navigation />
      <MobileNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
