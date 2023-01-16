import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../../stores/features/mode";

const Menu = ({ items }) => {
  const [active, setActive] = useState("");
  const [mode, setMode] = useState(false);
  const dispatch = useDispatch();

  const { isDarkMode } = useSelector((state) => state.mode);

  const handleClickMenuItem = (key) => {
    console.log(isDarkMode);
    window.location.href = `#${key}`;
    setActive(key);
  };

  const handleChangeMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    if (mode === true) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }

    return () => {};
  }, [mode]);

  useEffect(() => {
    const url = window.location.href;
    const key = url.split("#")[1];
    if (key) {
      handleClickMenuItem(key);
    }
  }, [window.location.href]);

  return (
    <div className={`menu ${isDarkMode ? "menu-dark" : ""}`}>
      {items &&
        items.map((item) => (
          <div
            className={`menu-item ${
              active === item.key ? "menu-item--active" : ""
            }`}
            key={item.key}
            onClick={() => handleClickMenuItem(item.key)}
          >
            <div className="menu-item-icon">
              <i className={item.icon} />
            </div>
            <div className="menu-item-label">{item.label}</div>
          </div>
        ))}
      <div className="menu-item">
        <div className="menu-item__mode" onClick={handleChangeMode}>
          {mode ? (
            <i class="fa-thin fa-clouds-sun"></i>
          ) : (
            <i class="fa-solid fa-moon"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
