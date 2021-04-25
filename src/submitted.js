import React from "react";
import { useLocation } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./submitted.css";

const Submitted = ({ t }) => {
    let location = useLocation();

    console.log(location.state);

    return (
        <div className="submitted-page">
            <h1>
                {t("Thank you")}{" "}
                <span className="eggplant">
                    {location.state && location.state.name}
                </span>
            </h1>
            <h3>{t("We will take care of it as soon as possible")}</h3>

            <section className="sum-box">
                <p>{t("You submitted this email")}</p>
                <code>{location.state && location.state.email}</code>
                <p>{t("Topic")}</p>
                <code>{location.state && location.state.topic}</code>
                <p>{t("Your description")}</p>
                <code>{location.state && location.state.description}</code>

                {location.state.phone && (
                    <>
                        {" "}
                        <p>{t("We will call you back at this number")}</p>
                        <code>{location.state.phone}</code>
                    </>
                )}

                {location.state.version && (
                    <>
                        {" "}
                        <p>{t("Version number")}</p>
                        <code>{location.state.version}</code>
                    </>
                )}
            </section>

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
