import { Layout } from "antd";
import logo from "@/assets/images/logo.png";
import logoDark from "@/assets/images/logo_dark.png";
import Menu from "../Menu/menu";
import { ROUTER } from "../../../constant/router";
import { useEffect, useState } from "react";
import MenuMobile from "../Menu/MenuMobile";
import { useSelector } from "react-redux";
const HeaderComponent = () => {
  const { Header } = Layout;
  const [navMb, setNavMb] = useState(false);
  const { isDarkMode } = useSelector((state) => state.mode);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNavMb(true);
      } else {
        setNavMb(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [navMb]);

  return (
    <Header className={`header ${isDarkMode ? "header-dark" : ""}`}>
      <div className="header__logo">
        <img src={isDarkMode ? logoDark : logo} alt="logo" />
      </div>
      <div className="header-nav">
        {navMb ? <MenuMobile /> : <Menu items={ROUTER} />}
      </div>
    </Header>
  );
};

export default HeaderComponent;
