import { Drawer } from "antd";
import React, { useState } from "react";

const MenuMobile = () => {
  const [visible, setVisible] = useState(false);
  const handleClickMenu = () => {
    setVisible(!visible);
  };
  return (
    <div className="menu-mb">
      <i className="fas fa-bars" onClick={handleClickMenu}></i>
      <Drawer open={visible} onClose={handleClickMenu} width={250}></Drawer>
    </div>
  );
};

export default MenuMobile;
