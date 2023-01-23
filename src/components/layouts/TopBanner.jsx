import React from "react";
import "./TopBanner.css";
import { useTranslation } from "react-i18next";
import "../../translations/i18n";

function TopBanner() {
  const { t } = useTranslation(); // t function is responsible for translating the content provided into the chosen language.
  return (
    <div className="head">
      <h2>{t("top_banner")}</h2>
    </div>
  );
}

export default TopBanner;
