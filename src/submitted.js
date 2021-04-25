import React from "react";
import { withNamespaces } from "react-i18next";
import "./submitted.css";

const Submitted = ({ t }) => {
    return (
        <div className="submitted-page">
            <h1>{t("Thank you for submitting the issue")}</h1>
            <h3>{t("We will take care of it as soon as possible")}</h3>
            <h3 className="dec-sub">
                {t("In the meanwhile, check out our")}{" "}
                <a
                    href={t("web-url")}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("website")}
                </a>{" "}
                {t("for some inspiration")}
            </h3>
        </div>
    );
};

export default withNamespaces()(Submitted);
