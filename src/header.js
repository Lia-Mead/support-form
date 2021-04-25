import React from "react";
import i18n from "./i18n";
import eng from "./images/eng.svg";
import ger from "./images/ger.svg";

const Header = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header>
                <div className="menu-box">
                    <img
                        alt="english"
                        onClick={() => changeLanguage("en")}
                        className="icon-lng"
                        src={eng}
                    />
                    <img
                        alt="german"
                        onClick={() => changeLanguage("de")}
                        className="icon-lng"
                        src={ger}
                    />
                </div>
            </header>
        </>
    );
};

export default Header;
