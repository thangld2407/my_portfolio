import i18n from "../locales";

const t = i18n.t;
export const ROUTER = [
  {
    key: "home",
    label: t("HEADER.NAVBAR.HOME"),
    icon: "fas fa-home",
  },
  {
    key: "about",
    label: t("HEADER.NAVBAR.ABOUT"),
    icon: "fas fa-user",
  },
  {
    key: "project",
    label: t("HEADER.NAVBAR.PROJECT"),
    icon: "fas fa-th",
  },
  {
    key: "cv",
    label: t("HEADER.NAVBAR.MY_CV"),
    icon: "fas fa-paperclip",
  },
];
