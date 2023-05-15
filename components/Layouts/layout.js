import React, { useEffect, useState } from "react";
import Header from "./Header";
import IconsCard from "./IconsCard";
import Footer from "./footer";
import FloatButton from "./floatButton";

const Layout = ({ children }) => {
  const [isManuScrolled, setIsManuScrolled] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      console.log(position);
      setIsManuScrolled(true);
    } else {
      setIsManuScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(isManuScrolled);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isManuScrolled]);

  return (
    <>
      <Header />
      <FloatButton isManuScrolled={isManuScrolled} />
      <main>{children}</main>
      <IconsCard />
      <Footer />
    </>
  );
};

export default Layout;
