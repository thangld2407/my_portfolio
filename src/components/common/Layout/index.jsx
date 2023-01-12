import { Layout } from "antd";
import { useEffect, useRef, useState } from "react";
import HeaderComponent from "../Header";
const LayoutComponent = () => {
  const [visible, setVisible] = useState(false);
  function handleScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    });
  }, [visible]);
  return (
    <Layout>
      <HeaderComponent />
      <section
        id="home"
        style={{
          height: "1400px",
          background: "transparent",
        }}
      ></section>
      <section
        id="about"
        style={{
          height: "700px",
          background: "purple",
        }}
      ></section>

      <section
        id="project"
        style={{
          height: "700px",
          background: "#FEC868",
        }}
      ></section>

      <section
        id="cv"
        style={{
          height: "700px",
          background: "#ABC270",
        }}
      ></section>

      {visible && (
        <div className="scroll-top" onClick={handleScrollTop}>
          <i className="fas fa-arrow-alt-up"></i>
        </div>
      )}
    </Layout>
  );
};

export default LayoutComponent;
