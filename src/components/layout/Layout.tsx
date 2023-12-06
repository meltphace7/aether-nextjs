import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
