import "antd/dist/reset.css";
import "@/assets/font-awesome-6-pro/css/all.min.css";
import "./scss/app.scss";

import LayoutComponent from "./components/common/Layout";
import { useEffect, useState } from "react";
import i18n from "./locales";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "./stores";

const RenderLoading = ({ onRendered }) => {
  return <div className="loading"></div>;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {!isLoading ? <LayoutComponent /> : <RenderLoading />}
      </I18nextProvider>
    </Provider>
  );
}

export default App;
